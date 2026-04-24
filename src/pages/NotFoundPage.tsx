import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="section">
      <div className="container empty-state">
        <h1>Trang không tồn tại</h1>
        <p>Liên kết bạn truy cập hiện chưa có nội dung hoặc đã thay đổi.</p>
        <Link to="/">Quay lại trang chủ</Link>
      </div>
    </section>
  )
}
