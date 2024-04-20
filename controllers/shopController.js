

module.exports = {
    getHome: async (req,res) => {
        let locals = {
            title: "UrbanDecor - Home",
            descriptions: "Home Page", 
        }

        res.render('index', {
            locals,
        })
    },
}