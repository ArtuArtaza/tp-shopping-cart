import { useParams } from "react-router-dom"
import { useStore } from "../../store/useStore"

const ProductView = () => {
    const {id} = useParams()
    const {data} = useStore()
    /*const product = productId ? data.find((e) => e.id === productId) : undefined
    */
    console.log(data,id)
    return (
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">
                        
                    </h3>
                </div>
            </div>
    )
}

export default ProductView