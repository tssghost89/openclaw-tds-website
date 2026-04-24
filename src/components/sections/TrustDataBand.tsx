const trustStats = [
  { value: '08+', label: 'Nhóm công trình trọng tâm', note: 'Có thể giữ nếu đây là số liệu thật.' },
  { value: '2D / 3D', label: 'Phạm vi triển khai chính', note: 'Thể hiện đúng năng lực cốt lõi hiện tại.' },
  { value: 'TBD', label: 'Số dự án / số năm kinh nghiệm', note: 'Nên thay bằng dữ liệu thật trước khi public.' },
]

const trustNotes = [
  'Nên ưu tiên số năm kinh nghiệm, số dự án và khu vực triển khai thật.',
  'Nếu có thể công bố, hãy thêm khách hàng hoặc đối tác tiêu biểu.',
]

export function TrustDataBand() {
  return (
    <section className="section section--light section--compact-top">
      <div className="container trust-data-band">
        <div className="trust-data-band__intro">
          <span className="section-heading__eyebrow">Dữ liệu năng lực</span>
          <h2>Dữ liệu năng lực đã xác nhận</h2>
          <p>Block này nên được thay bằng số liệu doanh nghiệp đã xác nhận trước khi public.</p>
        </div>
        <div className="trust-data-band__stats">
          {trustStats.map((item) => (
            <article key={item.label} className="stat-card trust-data-band__card" data-reveal>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <small>{item.note}</small>
            </article>
          ))}
        </div>
        <div className="trust-data-band__notes">
          {trustNotes.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
