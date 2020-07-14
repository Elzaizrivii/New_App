import React, {Component} from "react";
import s from "./Users.module.css";
import * as axios from "axios";

export class Users extends React.Component {

    componentDidMount() {
        axios.get(`http://localhost:3001/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`).then(respons => {
            this.props.setUsers(respons.data);
        });
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`http://localhost:3001/users?_page=${pageNumber}&_limit=${this.props.pageSize}`).then(respons => {
            this.props.setUsers(respons.data);
        });
    };

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div className={s.container}>
                <div className={s.dialogs}>
                    {pages.map(p =>
                        <span onClick={(e) => {
                            this.onPageChange(p);
                        }} className={this.props.currentPage === p && s.selected}>{p}</span>
                    )}
                    <div className={s.dialogsItems}>
                        {this.props.users.map(u => <div className={s.item} key={u.id}>
                            <div>{u.name}</div>
                            <div>{u.email}</div>
                        </div>)}
                    </div>
                </div>
            </div>
        );
    }
}