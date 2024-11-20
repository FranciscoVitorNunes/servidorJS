import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Post 1",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Post 2",
        imagem: "https://placekitten.com/300/150"
    },
    {
        id: 3,
        descricao: "Post 3",
        imagem: "https://placebear.com/300/150"
    },
    {
        id: 4,
        descricao: "Post 4",
        imagem: "https://baconmockup.com/300/150"
    },
    {
        id: 5,
        descricao: "Post 5",
        imagem: "https://picsum.photos/300/150"
    },
    {
        id: 6,
        descricao: "Post 6",
        imagem: "https://placeimg.com/300/150/any"
    }
];


const app = express();

app.use(express.json());

app.listen(3000,() => {
    console.log("Server is running on port 3000");
});

function buscarPostPorId(id){
    return posts.findIndex((post)=>{
        return post.id === Number(id)        
    })
}

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) => {
    const index=buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});

