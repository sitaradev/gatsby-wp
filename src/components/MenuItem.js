import React from "react"
import { Link } from "gatsby"

const MenuItem = ({ slug, title }) => {
  return (
    <Link style={{marginRight: '20px' }}
     to={slug}>
     {title}
     </Link>
  )
}

export default MenuItem