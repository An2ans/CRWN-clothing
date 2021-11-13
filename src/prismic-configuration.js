import Prismic from "prismic-javascript";

export const apiEndpoint = "https://crwn-clothing.cdn.prismic.io/api/v2";

const accessToken = "MC5ZWV9FM3hJQUFDOEFvQzFu.BO-_ve-_vQ_vv70W77-9Mu-_ve-_vXPvv701HH4J77-9NO-_vVYr77-977-977-977-977-977-9R--_vQrvv70L";


export const client = Prismic.client(apiEndpoint, {accessToken});
