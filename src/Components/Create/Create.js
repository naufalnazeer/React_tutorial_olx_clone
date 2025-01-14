import React, { Fragment } from 'react'
import './Create.css'
import Header from '../Header/Header'

const Create = () => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [prize, setPrize] = useState('')
  const [image, setImage] = useState(null)
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname"> Name </label> <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname"> Category </label> <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname"> Price </label> <br />
            <input className="input" type="number" id="fname" name="Price" />
            value={prize}
            onChange={(e) => setPrize(e.target.value)}
            <br />
          </form>{' '}
          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ''}
          >
            {' '}
          </img>{' '}
          <form>
            <br />
            <input
              onChange={(e) => {
                setImage(e.target.files[0])
              }}
              type="file"
            />
            <br />
            <button className="uploadBtn"> upload and Submit </button>{' '}
          </form>{' '}
        </div>{' '}
      </card>{' '}
    </Fragment>
  )
}

export default Create
