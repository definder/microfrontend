import React from 'react'
import { useHistory } from 'react-router-dom'
import { mount } from 'marketing/MarketingApp'

export default () => {
  const ref = React.useRef(null)
  const history = useHistory()

  React.useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location

        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      },
    })

    history.listen(onParentNavigate)
  }, [])

  return <div ref={ref} />
}
