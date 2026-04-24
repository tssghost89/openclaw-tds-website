import type { FooterData } from '../../types'

interface MainFooterProps {
  footer: FooterData
}

export function MainFooter({ footer }: MainFooterProps) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <h3>{footer.company}</h3>
          <p>{footer.description}</p>
        </div>
        <div>
          <h4>Liên kết nhanh</h4>
          <ul>
            {footer.links.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
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
      </div>
    </footer>
  )
}
