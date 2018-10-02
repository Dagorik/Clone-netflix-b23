import React, { Component } from 'react';
import gql from 'graphql-tag';
import {Mutation} from  'react-apollo';
import FileUploader from 'react-firebase-file-uploader';
import Firebase from '../../Firebase';


const UPDATE_ME = gql`
    mutation UpdateUser(
        $name:String!,
        $lastname:String!,
        $password:String!,
        $birth_date:String!,
        $gender:Genders,
        $avatar:String!
    ){
    updateUser( 
            name:$name,
            lastname:$lastname,
            password:$password,
            birth_date:$birth_date,
            gender:$gender,
            avatar:$avatar
        ){
            id,
            name,
            avatar,
            gender
            
        }
    }
`;



class FormME extends Component{

    constructor(props){
        super(props);
        console.log(props.data)
        this.state = {...props.data}
    }

    handleInput = (event) => {
        let {name,value} = event.target
        this.setState({[name]:value})
    }

    formSubmit = (e,updateUser) => {
        console.log(this.state)
        updateUser(
            {variables:{...this.state}}
        )
    }

    uploadFile = async(filename) => {
        let url =  await Firebase.storage().ref('avatars').child(filename)
        .getDownloadURL()

        this.setState({avatar:url})
    }

    render(){

        return(
            <Mutation mutation={UPDATE_ME}>
                {
                    (updateUser,{data}) => (
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <img src={this.state.avatar} className="img-fluid img-rounded" width="150" height="180"/>
                           <form onSubmit={(e) => this.formSubmit(e,updateUser)}>
                               <div className="form-group">
                                   <label htmlFor="">Nombre:</label>
                                   <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleInput} />
                               </div>
                               <div className="form-group">
                                   <label htmlFor="">Apellidos:</label>
                                   <input type="text" className="form-control" name="lastname" value={this.state.lastname} onChange={this.handleInput}/>
                               </div>
                               <div className="form-group">
                                   <label htmlFor="">Fecha de Nacimiento:</label>
                                   <input type="text" className="form-control" name="birth_date" value={this.state.birth_date} onChange={this.handleInput}/>
                               </div>
                               <div className="form-group">
                                   <label htmlFor="">Genero:</label>
                                   <select name="" className="form-control" id="" name="gender"   value={this.state.gender} onChange={this.handleInput}>
                                       <option value="H">Hombre</option>
                                       <option value="M">Mujer</option>
                                   </select>
                                   
                               </div>
                               <div className="form-group">
                                   <label htmlFor="">Email:</label>
                                   <input type="text" className="form-control" name="email" value={this.state.email} disabled/>
                               </div>
                               <div className="form-group">
                               <label>Avatar:</label>

                                       <FileUploader
                                           name="avatar"
                                           accept="image/*"
                                           randomizeFilename
                                           storageRef={
                                               Firebase.storage().ref('avatars')
                                           }
                                           onUploadError={(err) => console.log(err)}
                                           onUploadSuccess={this.uploadFile}
                                       />
                               </div> 
                               <button type="submit" className="btn btn-success">Guardar</button>
                           </form>
                       </div>
                   </div>
               
           
                        
                    )
                }

            </Mutation>

        )

    }




}

export default FormME;