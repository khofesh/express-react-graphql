# GraphQL with React: The Complete Developers Guide

https://www.udemy.com/course/graphql-with-react-course/

changes I made:

1. `.mjs`
2. some API changes in graphql
3. mongodb in local container

## mongodb

```shell
docker run --name fdm-mongo -p 27017:27017 -d mongo
```

## lyrical-graphql `localhost:4000/graphql`

```graphql
mutation {
  addSong(title: "Cold Night") {
    id
  }
}

mutation {
  addLyricToSong(
    content: "oh my oh my it's a cold night"
    songId: "62309b2577d41d1d22a115c8"
  ) {
    id
  }
}

{
  songs {
    id
    title
    lyrics {
      content
    }
  }
}
```
