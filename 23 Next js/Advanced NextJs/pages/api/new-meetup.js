import { MongoClient } from 'mongodb';
const handler = async function (req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const { title, img, address, description } = data;
        const client = MongoClient.connect('mongodb+srv://user-164083taf:164083taf@cluster0.easst.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Meetup Inserted!' });
    }
};

export default handler;