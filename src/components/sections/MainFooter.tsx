import { Link } from 'react-router-dom'
import type { FooterData } from '../../types'

interface MainFooterProps {
  footer: FooterData
}

const footerCapabilities = ['Công trình dân dụng', 'Công trình công cộng', 'Công trình công nghiệp', 'Thiết kế 2D / 3D']

export function MainFooter({ footer }: MainFooterProps) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div>
          <span className="section-heading__eyebrow">TDS Construction Design</span>
          <h3>{footer.company}</h3>
          <p>{footer.description}</p>
        </div>
        <div className="site-footer__capabilities">
          {footerCapabilities.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <div className="container site-footer__grid">
        <div>
          <h4>Điều hướng</h4>
          <ul>
            {footer.links.map((link) => (
              <li key={link.label}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Liên hệ</h4>
          <ul>
            <li>{footer.address}</li>
            <li>{footer.email}</li>
            <li>{footer.phone}</li>
          </ul>
        </div>
        <div>
          <h4>Phạm vi dịch vụ</h4>
          <ul>
            <li>Thiết kế 2D kỹ thuật</li>
            <li>Thiết kế 3D phối cảnh</li>
            <li>Giải pháp công năng</li>
            <li>Tư vấn định hướng thiết kế</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
