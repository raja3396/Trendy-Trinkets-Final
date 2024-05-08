import { Link } from "react-router-dom"
export default function SellerHeader()
{
  return (
    <section>
      <div className="s-header">
      <img className="s-logo" src="https://img.freepik.com/free-vector/gradient-instagram-shop-logo-design_23-2149718652.jpg?size=626&ext=jpg"/>
        <Link to={'/sellertrack'}>
           <img className="home" src="https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/House-Home-Property-128.png"/>
        </Link>
      </div>
    </section>
  )
}