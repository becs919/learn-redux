import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
};

function mapDisbatchToProps(disbatch) {
  return bindActionCreators(actionCreators, disbatch)
};

const App = connect(mapStateToProps, mapDisbatchToProps)(Main);

export default App;
