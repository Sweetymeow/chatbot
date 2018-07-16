//得到当前过滤器并渲染 Link
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions'; //Action creator for 'SET_VISIBILITY_FILTER'
import Link from '../Link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    //console.log("FILTERLINK: action -> ", setVisibilityFilter(ownProps.filter));
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
