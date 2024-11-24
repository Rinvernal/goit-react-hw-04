import s from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({setPage}) => {
  return (
    <div>
      <button className={s.btn} onClick={() => setPage(prev => prev +1)}>Load More</button>
    </div>
  )
}

export default LoadMoreBtn