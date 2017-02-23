export default {
  init: function(parentComponent, breakpoints){
    const bp = {
      xs: 480,
      sm: 768,
      md: 992,
      lg: 1200,
      ...breakpoints
    }
    const that = this
    function matchMedia(namespace, mediaQuery){
      let media = window.matchMedia(mediaQuery)
      that[namespace] = media.matches
      media.addListener(function(data) {
        that[namespace] = data.matches
        parentComponent.forceUpdate()
      })
    }
    matchMedia('xs', '(max-width: '+bp.xs+'px)')
    matchMedia('gtxs', '(min-width: '+(bp.xs+1)+'px)')

    matchMedia('ltsm', '(max-width: '+bp.sm+'px)')
    matchMedia('sm', '(min-width: '+(bp.xs+1)+'px) and (max-width: '+bp.sm+'px)')
    matchMedia('gtsm', '(min-width: '+(bp.sm+1)+'px)')

    matchMedia('ltmd', '(max-width: '+bp.md+'px)')
    matchMedia('md', '(min-width: '+(bp.sm+1)+'px) and (max-width: '+bp.md+'px)')
    matchMedia('gtmd', '(min-width: '+(bp.md+1)+'px)')

    matchMedia('ltlg', '(max-width: '+bp.lg+'px)')
    matchMedia('lg', '(min-width: '+(bp.md+1)+'px)')
  },
  xs: false,
  gtxs: false,
  ltsm: false,
  sm: false,
  gtsm: false,
  ltmd: false,
  md: false,
  gtmd: false,
  ltlg: false,
  lg: false
}