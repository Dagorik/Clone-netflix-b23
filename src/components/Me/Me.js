import React, { Component } from 'react';
import gql from 'graphql-tag';
import {Query} from  'react-apollo';
import FormME from './FormME';

const GET_ME = gql`

    query{
        me{
            name,
            lastname,
            email,
            birth_date,
            password
            gender,
            avatar,
            suscription{
                suscription_type
            }
        }
    }
`;


class Me extends Component{
    render(){
        return(
            <Query query={GET_ME}>
                {
                    ({loading,error,data}) => {
                        if(loading) return ( <h4>Loading...</h4> )
                        if(error) return (<h4>{error}</h4>)
                        return <FormME data={data.me}/>

                    }

                }

            </Query>

        )
    }




}

export default Me;