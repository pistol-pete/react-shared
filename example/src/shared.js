export default {
  init: function(initialState, parentComponent){
  	this.state = initialState
  	this.onUpdate = () => parentComponent.forceUpdate()
  },
  setState: function(state){
  	this.state = {...this.state, ...state}
  	this.onUpdate()
  }
}