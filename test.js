var data = [ 
  { 
    id: '3356654846',
    type: 'PushEvent',
    actor:
     { id: 5817201,
       login: 'fresh5447',
       gravatar_id: '',
       url: 'https://api.github.com/users/fresh5447',
       avatar_url: 'https://avatars.githubusercontent.com/u/5817201?' },
    repo:
     { id: 46365678,
       name: 'fresh5447/photo-style-blog',
       url: 'https://api.github.com/repos/fresh5447/photo-style-blog' },
    payload: {
      "push_id": 871112166,
      "size": 2,
      "distinct_size": 2,
      "ref": "refs/heads/master",
      "head": "13bb1d4ba95a39154468e2e8d8ea26f8a6244a32",
      "before": "1c98a40185b535b9bd5ba1157140d23c4852e371",
      "commits": [
        {
          "sha": "188b76591709d8664e308639c92f288e58d9038c",
          "author": {
            "email": "doug@kosmojo.com",
            "name": "fresh5447"
          },
          "message": "commiting for example",
          "distinct": true,
          "url": "https://api.github.com/repos/fresh5447/photo-style-blog/commits/188b76591709d8664e308639c92f288e58d9038c"
        },
        {
          "sha": "13bb1d4ba95a39154468e2e8d8ea26f8a6244a32",
          "author": {
            "email": "doug@kosmojo.com",
            "name": "fresh5447"
          },
          "message": "github component is rendering with static data, next step is to plug in dynamic data",
          "distinct": true,
          "url": "https://api.github.com/repos/fresh5447/photo-style-blog/commits/13bb1d4ba95a39154468e2e8d8ea26f8a6244a32"
        }
      ]
    },
    public: true,
    created_at: '2015-11-18T21:26:08Z' },
  { id: '3355518571',
    type: 'PushEvent',
    actor:
     { id: 5817201,
       login: 'fresh5447',
       gravatar_id: '',
       url: 'https://api.github.com/users/fresh5447',
       avatar_url: 'https://avatars.githubusercontent.com/u/5817201?' },
    repo:
     { id: 45963401,
       name: 'fresh5447/my-paranoia',
       url: 'https://api.github.com/repos/fresh5447/my-paranoia' },
    payload: {
      "push_id": 871112166,
      "size": 2,
      "distinct_size": 2,
      "ref": "refs/heads/master",
      "head": "13bb1d4ba95a39154468e2e8d8ea26f8a6244a32",
      "before": "1c98a40185b535b9bd5ba1157140d23c4852e371",
      "commits": [
        {
          "sha": "188b76591709d8664e308639c92f288e58d9038c",
          "author": {
            "email": "doug@kosmojo.com",
            "name": "fresh5447"
          },
          "message": "commiting for example",
          "distinct": true,
          "url": "https://api.github.com/repos/fresh5447/photo-style-blog/commits/188b76591709d8664e308639c92f288e58d9038c"
        },
        {
          "sha": "13bb1d4ba95a39154468e2e8d8ea26f8a6244a32",
          "author": {
            "email": "doug@kosmojo.com",
            "name": "fresh5447"
          },
          "message": "github component is rendering with static data, next step is to plug in dynamic data",
          "distinct": true,
          "url": "https://api.github.com/repos/fresh5447/photo-style-blog/commits/13bb1d4ba95a39154468e2e8d8ea26f8a6244a32"
        }
      ]
    },
    public: true,
    created_at: '2015-11-18T16:43:33Z' },
 ]

// var commits = data.map(function(g){
//   return {
//     g.payload.commits;
//   }
// })


var goodie = data.map(function(g){
  if(g.payload.commits){
    var coms = g.payload.commits.map(function(c){
      return {"message": c.message, "url": c.url}
      })
  }
  return {
    "id": g.id, "type": g.type, 
    "repo": g.repo.name, "timeStamp": g.created_at, "coms": coms};
  }
);

console.log(goodie)
