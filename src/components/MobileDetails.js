import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { buyMobile,sellMobile,getAllUsers,getSingleUser,addUser } from '../redux/actions/mobile-action';

function MobileDetails({noOfMobiles,buyMobile,sellMobile,users,getAllUsers,getSingleUser,user,addUser}) {
    return (
        <div>
            <h2>No Of Mobiles : {noOfMobiles} and Users : {users.length} Details :{user.name}</h2>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <button className="btn btn-info" onClick={()=>buyMobile()}>Buy Mobile</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info" onClick={()=>sellMobile()}>Sell Mobile</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info" onClick={()=>addUser({name:'uday'})}>Add User</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info" onClick={()=>getAllUsers()}>Get All Users</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info" onClick={()=>getSingleUser(1)}>Get Single User</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info" onClick={()=>sellMobile()}>Edit User</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-info" onClick={()=>sellMobile()}>Delete User</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        noOfMobiles:state.noOfMobiles,
        users:state.users,
        user:state.user
    }
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        buyMobile,
        sellMobile,
        getAllUsers,
        getSingleUser,
        addUser
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(MobileDetails);
