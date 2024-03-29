import React from "react";
import {Query} from "react-apollo/index";
import {HOME_PAGE} from "../Queries/queries"

const Home = () => <Query query={HOME_PAGE}>{({ loading, data, error})=>{
    if(loading) return <span>loading</span>
    if(error) return <span>something happened</span>
    if(data){
        return data.movies.map((index) =>
            <h3 key={index.id}>
                {index.title} / {index.rating}
            </h3>
        )}
}}</Query>

export default Home;
