import React from 'react';
import EmpDetails from './EmpDetails';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';

class EmpDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.emps.read(this.props.match.params.empId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleOpenModal = e =>{
    this.setState({modalIsOpen: true})
  }

  handleCloseModal = e =>{
    this.setState({modalIsOpen: false})
  }

  handleDeleteEmp = async e =>{
    this.setState({ loading: true, error: null });
    try {
      await api.emps.remove(this.props.match.params.empId);
      this.setState({ loading: false});

      this.props.history.push('/emps');

    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <EmpDetails 
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteEmp={this.handleDeleteEmp}
        emp={this.state.data}>

      </EmpDetails>
    );
  }
}

export default EmpDetailsContainer;