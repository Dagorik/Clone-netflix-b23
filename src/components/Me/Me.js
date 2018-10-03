import React, { Component } from 'react';
import gql from 'graphql-tag';
import {Query} from  'react-apollo';
import FormME from './FormME';
import Paypal from '../Paypal/Paypal';

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

const CLIENT =  {
    sandbox:"AR3IGrHtCd_eon-Hj-77ujv4ofklvBCuMoEUOb4n8QrAuugzpcIFEDmoNnbjYQP8vld0tzbac0_SfV5V",
    production:""

}

const ENV = process.env.NODE_ENV === "production" ? "production" : "sandbox"

const onSuccess =  (payment) => { console.log(payment)}

const onError =  (error) => console.log("Error:",error)

const onCancel =  (data) => console.log("Cancel",data)

class Me extends Component{

    render(){
        return(
            <div>
                <Query query={GET_ME}>
                {
                    ({loading,error,data}) => {
                        if(loading) return ( <h4>Loading...</h4> )
                        if(error) return (<h4>{error}</h4>)
                        return <FormME data={data.me}/>

                    }

                }

                </Query>


                <Paypal
                    client={CLIENT}
                    env={ENV}
                    commit={true}
                    currency={'MXN'}
                    total={100}
                    onSuccess={onSuccess}
                    onError={onError}
                    onCancel={onCancel}
                
                />


            </div>
            

        )
    }




}

export default Me;