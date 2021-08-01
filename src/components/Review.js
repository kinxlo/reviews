import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import data from '../data'

const Review = () => {
  const [index, setIndex] = useState(0)
  const [reviews, setReviews] = useState(data)
  // destructuring the person

  const { name, job, image, text } = reviews[index]

  const checkIndex = (index) => {
    if (index > reviews.length - 1) {
      return 0
    }
    if (index < 0) {
      return reviews.length - 1
    }
    return index
  }

  const getNextPerson = () => {
    setIndex((prevState) => {
      let newIndex = prevState + 1
      return checkIndex(newIndex)
    })
  }

  const getPreviousPerson = () => {
    setIndex((prevState) => {
      let newIndex = prevState - 1
      return checkIndex(newIndex)
    })
  }

  const getRandomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length)
    // to avoid repetition
    if (randomNumber === index) {
      randomNumber = index - 1
    }
    setIndex(checkIndex(randomNumber))
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt='LOGO' className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={getPreviousPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={getNextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={getRandomPerson}>
        Surprise me!
      </button>
    </article>
  )
}

export default Review
