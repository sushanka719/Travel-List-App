
import { useState } from "react";


function Form({ onAddItems }) {

    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState(1)


    function handleSubmit(e) {
        e.preventDefault()

        if (!description) return;

        const newItem = { description, quantity, packed: false, id: Date.now() };
        console.log(newItem)

        onAddItems(newItem)

        setDescription('')
        setQuantity('')
    }

    return <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😘 trip?</h3>
        <select value={quantity} onChange={e => setQuantity(+e.target.value)}>
            {Array.from({ length: 20 }, (_, i) => i + 1).map(num => <option value={num} key={num}>{num}</option>)}
            {/* <option value={1} key="">1</option>
      <option value={2} key="">2</option>
      <option value={3} key="">3</option> */}
        </select>
        <input
            type="text"
            placeholder="Item....."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
    </form>
}

export default Form