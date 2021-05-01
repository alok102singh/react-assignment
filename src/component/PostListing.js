import React, { Component } from 'react'
import { APIService } from '../config/service/apiService';
import apiUrl from '../api.constant';
import { Paper, Button, TablePagination } from '@material-ui/core';
import { Post } from '../config/model/post.model';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default class PostListing extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            page: 0,
            rowsPerPage: [30],
            buttonText: "Refresh"
        }
    }
    componentDidMount = async() => {
            await this.getPostData();
        
    }

    getPostData = async() => {
        this.setState({buttonText:"loading...."})
        const {page} = this.state;
        let apiService = new APIService();
        let requestData = await apiService.getRequest(`${apiUrl.list}?page=${page+1}`);
        const postData = Object.values(requestData).map(item => new Post(item));
        this.setState({posts: postData});
        this.setState({buttonText:"Refresh"})
    }

    handleChangePage = async (e, newPage) => {
        console.log('change Page',e,newPage);
        await this.setState({page: newPage});
        await this.getPostData();
    }

    // handleChangeRowsPerPage = (e) => {
    //     console.log('change Row Page',e);
    // }

    render() {

        const { posts,rowsPerPage,page, buttonText } = this.state;
        const header={
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            height: '50px'
        }
        const root = {
            display: 'flex',
            flexDirection: 'row',
            flexWrap:'wrap',
            width: '100%',
            justifyContent: 'center',
            background: '#cdcdcd'

        }
        const classes = {
            table: {
                minWidth: 650,
            }
        }

        return (<div>
                <div style={header}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={e => this.props.history.goBack()}>Go Back</Button>
                    <div>Posts Listing</div>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={e => this.getPostData()}>{buttonText}</Button>
                </div>
                <div style={root}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell align="center">PostId</TableCell>
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="center">Email</TableCell>
                                    <TableCell align="center">Body</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {posts.map((keys, i) => (
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            {keys.id}
                                        </TableCell>
                                        <TableCell align="left">{keys.postId}</TableCell>
                                        <TableCell align="left">{keys.name}</TableCell>
                                        <TableCell align="left">{keys.email}</TableCell>
                                        <TableCell align="left">{keys.body}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <TablePagination
                    component="div"
                    count={((page+1)*30)+1}
                    page={page}
                    rowsPerPageOptions={["30"]}
                    onChangePage={this.handleChangePage}
                    rowsPerPage={30}
                    />
            </div>
        )
    }
}
