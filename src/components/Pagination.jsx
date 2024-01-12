import { arrowLeft, arrowRight } from "../assets/img"

export const Pagination = () => {
  return (
    <div class="table__pages">
      <div class="table__pages-view">Showing data 1 to 8 of 256K entries</div>
      <div class="table__pages-link">
        <a class="table__pages-links" href="/">
          <img src={arrowLeft} alt="arrow-left" />
        </a>
        <a class="table__pages-links active" href="/">1</a>
        <a class="table__pages-links" href="/">2</a>
        <a class="table__pages-links" href="/">3</a>
        <a class="table__pages-links" href="/">4</a>
        <span>...</span>
        <a class="table__pages-links" href="/">40</a>
        <a class="table__pages-links" href="/">
          <img src={arrowRight} alt="arrow-right" />
        </a>
      </div>
    </div>
  )
}
