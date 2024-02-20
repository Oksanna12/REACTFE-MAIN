import { Link } from "react-router-dom";
import style from "../../Styles/Styles.module.css";





const Card = ({data, isSingle}) => {
	
	const {experience, photo, qualifications, fullName} = data;

	return <div id = {style.card} className ='flex'>
		<div className ='text-justify m-auto'>
			{
				isSingle? null : <Link to = {`/info/${fullName}`}><div className = "hover:text-indigo-900"
				 id = {style.name} >{qualifications}</div></Link>
			}
			{
				isSingle && (
					<div id = {style.authInfo} className ='flex'>
						<div className ="pt-2 text-indigo-900 text-lg">
							   <strong className="text-yellow-100 text-2xl">{fullName}</strong> 
							<strong><ul>
									<li>Expirience: {experience} year(s)</li>
									<li>Qualification: {qualifications}</li>
									<li>...................................</li>
								</ul></strong>
						</div>
						<img  width ='300px' height ="280px" className ='mr-4 pl-9 float-left'
				        src = {photo}>
			         </img>
					</div>
				)
			}
		</div>
	</div>
}





export default Card;