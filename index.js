class SocialMediaApp{
    constructor(){
        this.followers[user] = {};
    }

    addUser(user){
        this.follower[user] = []
    }

    addFollower(user, follower){
        this.followers[user].push(follower)
    }

    getFollowers(user){
        return this.followers[user]  
    }
}

const app = new SocialMediaApp()
app.addUser("user1")
app.addUser("user2")
app.addFollower("user1", "user2")
app.addFollower("user1", "user3")

console.log(app.getFollowers("user1"));