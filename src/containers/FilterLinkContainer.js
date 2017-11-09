import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import LinkComponent from '../components/LinkComponent'

const mapStateToProps = (state, ownProps) => {
  console.log("+++++ FilterLinkContainer mapStateToProps")
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("+++++ FilterLinkContainer mapDispatchToProps")
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkComponent)

export default FilterLinkContainer