const faunadb = require("faunadb");

const secret = process.env.FAUNADB_SECRET;

const q = faunadb.query;
const client = new faunadb.Client({secret});

module.exports = async (req, res) => {
	let query;
	if (req.query.request[0] === "get") {
		try {
			query = req.query.request[1] === "all"
				
				? await client.query(
					// SELECT * FROM posts
					q.Map(
						q.Paginate(
							q.Match(q.Index("all_posts"))
						),
						q.Lambda("x", q.Get(q.Var("x")))
					)
				).then(response => {
					return response.data;
				})
				
				: await client.query(
					// SELECT * FROM posts WHERE slug="x";
					q.Map(
						q.Paginate(
							q.Match(q.Index("posts_by_slug"), req.query.request[1])
						),
						q.Lambda("x", q.Get(q.Var("x")))
					)
				).then(response => {
					return response.data;
				});
			
			res.status(200).json(
				query.map(collection => {
					return collection.data;
				})
			);
		} catch (e) {
			res.status(500).json({error: e.message});
		}
	} else {
		res.status(405).json({error: "Method not allowed"});
	}
};