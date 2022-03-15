exports = module.exports = {

    dev: {
        databaseurl: 'mongodb://saisarath:S1isarath@cluster0-shard-00-00.d2my3.mongodb.net:27017,cluster0-shard-00-01.d2my3.mongodb.net:27017,cluster0-shard-00-02.d2my3.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-2prf66-shard-0&authSource=admin&retryWrites=true&w=majority'
    },

    qa: {
        databaseurl: 'mongodb://saisarath:S1isarath@cluster0.d2my3.mongodb.net:27017/test'
    },

    preProd: {
        databaseurl: 'mongodb://saisarath:S1isarath@cluster0.d2my3.mongodb.net:27017/test'
    },

    live: {
        databaseurl: 'mongodb://saisarath:S1isarath@cluster0.d2my3.mongodb.net:27017/test'
    }

}