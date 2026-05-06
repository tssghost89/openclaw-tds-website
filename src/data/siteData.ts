import type {
  AboutSnapshotData,
  CtaData,
  FooterData,
  HeroData,
  JobItem,
  NavigationItem,
  NewsItem,
  ProcessStep,
  ProjectItem,
  SectorItem,
  ServiceItem,
  ValueItem,
} from '../types'

interface SiteData {
  navigation: NavigationItem[]
  hero: HeroData
  aboutSnapshot: AboutSnapshotData
  services: ServiceItem[]
  sectors: SectorItem[]
  projects: ProjectItem[]
  values: ValueItem[]
  process: ProcessStep[]
  news: NewsItem[]
  jobs: JobItem[]
  cta: CtaData
  footer: FooterData
}

export const siteData: SiteData = {
  navigation: [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giới thiệu', href: '/gioi-thieu' },
    { label: 'Dịch vụ', href: '/dich-vu' },
    { label: 'Dự án', href: '/du-an' },
    { label: 'Tin tức', href: '/tin-tuc' },
    { label: 'Tuyển dụng', href: '/tuyen-dung' },
    { label: 'Liên hệ', href: '/lien-he' },
  ],
  hero: {
    eyebrow: 'Công ty Cổ phần TDS Việt Nam',
    title: 'Khảo sát, thí nghiệm, kiểm định và thi công xây dựng cho các công trình dân dụng, công nghiệp và hạ tầng',
    description:
      'TDS Việt Nam được thành lập năm 2009, hoạt động trong các lĩnh vực thi công xây lắp, tư vấn xây dựng, khảo sát địa hình – địa chất, thí nghiệm kiểm định chất lượng công trình, thí nghiệm cọc và các giải pháp kỹ thuật phục vụ đầu tư xây dựng.',
    primaryAction: 'Xem dịch vụ',
    secondaryAction: 'Xem hồ sơ dự án',
    metrics: [
      { value: '2009', label: 'Năm thành lập' },
      { value: 'LAS-XD 866', label: 'Phòng thí nghiệm chuyên ngành xây dựng' },
      { value: '92+ tỷ', label: 'Doanh thu năm 2022' },
    ],
    highlights: [
      'Thi công xây lắp, tổng thầu thiết kế, EPC và chìa khóa trao tay',
      'Khảo sát địa hình, địa chất công trình, khoan thăm dò và khảo sát nền móng',
      'Thí nghiệm nén tĩnh cọc, PDA, PIT, siêu âm, khoan lấy lõi và kiểm định chất lượng công trình',
    ],
  },
  aboutSnapshot: {
    eyebrow: 'Về TDS Việt Nam',
    title: 'Năng lực thực tế được xây dựng từ công trường, phòng thí nghiệm và kinh nghiệm triển khai dự án',
    description:
      'TDS Việt Nam theo đuổi định hướng phát triển bền vững, lấy uy tín, chất lượng, tiến độ và sự hài lòng của khách hàng làm trọng tâm trong toàn bộ quá trình cung cấp dịch vụ.',
    stats: [
      { value: '16/11/2009', label: 'Ngày thành lập doanh nghiệp' },
      { value: '0104254591', label: 'Mã số doanh nghiệp và mã số thuế' },
      { value: 'BXD / HAN', label: 'Có chứng chỉ năng lực hoạt động xây dựng' },
      { value: 'PCCC', label: 'Đủ điều kiện kinh doanh dịch vụ phòng cháy chữa cháy' },
    ],
  },
  services: [
    {
      slug: 'thi-cong-xay-lap-va-tong-thau',
      title: 'Thi công xây lắp và tổng thầu',
      description: 'Cung cấp dịch vụ thi công xây dựng, tổng thầu thiết kế, tổng thầu EPC và chìa khóa trao tay cho nhiều loại hình công trình.',
      deliverables: ['Thi công xây lắp công trình', 'Tổng thầu thiết kế', 'Tổng thầu EPC', 'Tổng thầu chìa khóa trao tay'],
      audience: ['Chủ đầu tư công trình dân dụng', 'Chủ đầu tư công trình công nghiệp', 'Dự án hạ tầng và công trình kỹ thuật'],
      process: ['Tiếp nhận yêu cầu dự án', 'Khảo sát và rà soát hồ sơ', 'Đề xuất giải pháp triển khai', 'Tổ chức thi công và kiểm soát tiến độ'],
      scope: ['Thi công phần xây dựng', 'Phối hợp thiết bị công trình', 'Tổ chức quản lý hiện trường', 'Kiểm soát chất lượng và tiến độ'],
      faq: [
        { question: 'TDS nhận các loại công trình nào?', answer: 'TDS triển khai cho công trình dân dụng, công nghiệp, giao thông, thủy lợi, thủy điện, y tế, giáo dục và nhiều hạng mục kỹ thuật liên quan.' },
        { question: 'TDS có làm theo mô hình tổng thầu không?', answer: 'Có. Theo hồ sơ năng lực, TDS cung cấp dịch vụ tổng thầu thiết kế, tổng thầu EPC và tổng thầu chìa khóa trao tay.' },
      ],
    },
    {
      slug: 'khao-sat-dia-hinh-dia-chat-cong-trinh',
      title: 'Khảo sát địa hình, địa chất công trình',
      description: 'Thực hiện khảo sát địa hình, khảo sát địa chất công trình, khoan thăm dò và phục vụ lập dự án, thiết kế và thi công.',
      deliverables: ['Khảo sát địa hình', 'Khảo sát địa chất công trình', 'Khoan thăm dò', 'Hồ sơ khảo sát phục vụ thiết kế'],
      audience: ['Dự án đầu tư xây dựng', 'Dự án giao thông và hạ tầng', 'Công trình dân dụng và công nghiệp'],
      process: ['Khảo sát hiện trường', 'Lập phương án khoan khảo sát', 'Thí nghiệm và phân tích mẫu', 'Bàn giao hồ sơ kết quả khảo sát'],
      scope: ['Khảo sát phục vụ báo cáo nghiên cứu khả thi', 'Khảo sát phục vụ thiết kế bản vẽ thi công', 'Khảo sát nền móng công trình', 'Khảo sát các hạng mục mở rộng, cải tạo'],
      faq: [
        { question: 'Dịch vụ khảo sát phục vụ giai đoạn nào?', answer: 'Có thể phục vụ từ giai đoạn lập dự án, báo cáo nghiên cứu khả thi, thiết kế kỹ thuật đến triển khai thi công.' },
        { question: 'TDS có kinh nghiệm khảo sát công trình công cộng và giao thông không?', answer: 'Có. Hồ sơ năng lực thể hiện nhiều dự án khảo sát cho trường học, bệnh viện, công trình công cộng và hạ tầng giao thông tại nhiều địa phương.' },
      ],
    },
    {
      slug: 'thi-nghiem-va-kiem-dinh-chat-luong-cong-trinh',
      title: 'Thí nghiệm và kiểm định chất lượng công trình',
      description: 'Thực hiện thí nghiệm, kiểm định chất lượng vật tư, vật liệu và công trình xây dựng bằng đội ngũ và hệ thống phòng thí nghiệm chuyên ngành.',
      deliverables: ['Kiểm định chất lượng công trình', 'Kiểm định vật tư vật liệu', 'Thí nghiệm chuyên ngành xây dựng', 'Báo cáo kết quả thí nghiệm'],
      audience: ['Nhà thầu thi công', 'Chủ đầu tư', 'Đơn vị tư vấn giám sát', 'Dự án cần xác nhận chất lượng công trình'],
      process: ['Tiếp nhận yêu cầu kỹ thuật', 'Thí nghiệm tại hiện trường hoặc phòng lab', 'Đánh giá kết quả', 'Phát hành báo cáo và khuyến nghị'],
      scope: ['Thí nghiệm vật liệu xây dựng', 'Kiểm định chất lượng kết cấu', 'Thí nghiệm phục vụ nghiệm thu', 'Đánh giá hiện trạng và chất lượng công trình'],
      faq: [
        { question: 'TDS có phòng thí nghiệm chuyên ngành xây dựng không?', answer: 'Có. Hồ sơ năng lực nêu rõ TDS có phòng thí nghiệm chuyên ngành xây dựng LAS-XD 866.' },
        { question: 'Dịch vụ này phù hợp với ai?', answer: 'Phù hợp với chủ đầu tư, nhà thầu, tư vấn giám sát và các đơn vị cần dữ liệu kỹ thuật tin cậy phục vụ quản lý chất lượng.' },
      ],
    },
    {
      slug: 'thi-nghiem-coc-va-nen-mong',
      title: 'Thí nghiệm cọc và nền móng',
      description: 'Triển khai các dịch vụ thí nghiệm nén tĩnh cọc, PDA, PIT, siêu âm, khoan lấy lõi và các phép thử phục vụ đánh giá sức chịu tải, chất lượng và sự toàn vẹn của cọc.',
      deliverables: ['Thí nghiệm nén tĩnh cọc', 'Thí nghiệm PDA', 'Thí nghiệm PIT', 'Siêu âm cọc khoan nhồi', 'Khoan lấy lõi cọc'],
      audience: ['Dự án nền móng công trình', 'Nhà thầu cọc khoan nhồi', 'Dự án cần đánh giá sức chịu tải cọc', 'Công trình cầu đường và nhà cao tầng'],
      process: ['Khảo sát hồ sơ cọc', 'Chuẩn bị phương án thí nghiệm', 'Triển khai tại hiện trường', 'Phân tích và phát hành báo cáo'],
      scope: ['Đánh giá sức chịu tải cọc', 'Kiểm tra sự toàn vẹn cọc', 'Kiểm tra tiếp xúc mũi cọc và đất', 'Đánh giá chất lượng cọc khoan nhồi'],
      faq: [
        { question: 'TDS có thực hiện đầy đủ các phương pháp thí nghiệm cọc phổ biến không?', answer: 'Có. Hồ sơ nêu rõ các dịch vụ như nén tĩnh cọc, PIT, PDA, siêu âm, khoan lấy lõi cọc và các kiểm tra chất lượng liên quan.' },
        { question: 'Loại công trình nào thường dùng dịch vụ này?', answer: 'Nhiều nhất là công trình nhà cao tầng, khu đô thị, nhà xưởng, cầu đường và các dự án có kết cấu móng cọc.' },
      ],
    },
    {
      slug: 'tu-van-dau-tu-va-tu-van-xay-dung',
      title: 'Tư vấn đầu tư và tư vấn xây dựng',
      description: 'Cung cấp dịch vụ tư vấn đầu tư và tư vấn xây dựng cho công trình dân dụng, công nghiệp, giao thông, thủy lợi, thủy điện, y tế, giáo dục và văn hóa.',
      deliverables: ['Tư vấn đầu tư', 'Tư vấn xây dựng', 'Rà soát phương án kỹ thuật', 'Hồ sơ phục vụ lập và triển khai dự án'],
      audience: ['Chủ đầu tư đang chuẩn bị dự án', 'Đơn vị cần rà soát giải pháp kỹ thuật', 'Cơ quan và tổ chức quản lý dự án'],
      process: ['Làm rõ mục tiêu đầu tư', 'Đánh giá hiện trạng và yêu cầu kỹ thuật', 'Đề xuất giải pháp phù hợp', 'Hỗ trợ triển khai các bước tiếp theo'],
      scope: ['Tư vấn kỹ thuật công trình', 'Đề xuất giải pháp tối ưu về kinh tế – kỹ thuật', 'Hỗ trợ chuẩn bị hồ sơ đầu tư', 'Phối hợp đa ngành trong quá trình triển khai'],
      faq: [
        { question: 'Tư vấn của TDS thiên về thiết kế hay thi công?', answer: 'Theo hồ sơ năng lực, TDS có thế mạnh đa mảng từ tư vấn, khảo sát, thí nghiệm đến thi công, nên có khả năng tư vấn theo hướng thực tế và khả thi.' },
        { question: 'TDS có tư vấn cho nhiều nhóm công trình không?', answer: 'Có. Danh mục lĩnh vực trong HSNL bao gồm dân dụng, công nghiệp, nông lâm nghiệp, giao thông, thủy lợi, thủy điện, y tế, văn hóa, giáo dục, thể thao và các lĩnh vực liên quan.' },
      ],
    },
    {
      slug: 'tham-tra-thiet-ke-va-du-toan',
      title: 'Thẩm tra thiết kế và dự toán',
      description: 'Thực hiện thẩm tra hồ sơ thiết kế, dự toán, báo cáo kinh tế kỹ thuật và các hạng mục kỹ thuật phục vụ quản lý chất lượng đầu tư xây dựng.',
      deliverables: ['Thẩm tra thiết kế BVTC', 'Thẩm tra dự toán', 'Thẩm tra báo cáo kinh tế kỹ thuật', 'Rà soát hồ sơ kỹ thuật'],
      audience: ['Chủ đầu tư', 'Đơn vị quản lý dự án', 'Cơ quan, trường học, bệnh viện và doanh nghiệp'],
      process: ['Tiếp nhận hồ sơ', 'Rà soát pháp lý và kỹ thuật', 'Đánh giá tính phù hợp', 'Báo cáo thẩm tra và kiến nghị'],
      scope: ['Thẩm tra thiết kế bản vẽ thi công', 'Thẩm tra tổng dự toán', 'Thẩm tra phương án kỹ thuật chuyên ngành', 'Đánh giá hồ sơ phục vụ phê duyệt'],
      faq: [
        { question: 'TDS có kinh nghiệm thẩm tra cho khối công và tư không?', answer: 'Có. Hồ sơ năng lực liệt kê nhiều dự án thẩm tra cho trường đại học, bệnh viện, cơ quan nhà nước, ngân hàng và doanh nghiệp.' },
        { question: 'Dịch vụ này giúp gì cho chủ đầu tư?', answer: 'Giúp rà soát chất lượng hồ sơ, giảm rủi ro kỹ thuật, tăng độ tin cậy trước khi triển khai thi công hoặc phê duyệt đầu tư.' },
      ],
    },
  ],
  sectors: [
    { title: 'Công trình dân dụng', description: 'Triển khai cho nhà ở, công trình công cộng, trụ sở làm việc và các dự án có yêu cầu đồng bộ về kỹ thuật, chất lượng và tiến độ.' },
    { title: 'Công trình công nghiệp', description: 'Tham gia khảo sát, thí nghiệm, kiểm định và tư vấn cho nhà máy, nhà xưởng, hạ tầng kỹ thuật và các dự án sản xuất.' },
    { title: 'Giao thông và hạ tầng', description: 'Có kinh nghiệm với cầu đường, tuyến giao thông, hệ thống thoát nước, công trình hạ tầng đô thị và hạ tầng kỹ thuật.' },
    { title: 'Giáo dục và đào tạo', description: 'Thực hiện nhiều gói khảo sát, thẩm tra, thí nghiệm và tư vấn cho trường học, học viện và cơ sở đào tạo.' },
    { title: 'Y tế và công trình xã hội', description: 'Phục vụ các dự án bệnh viện, trung tâm y tế, cơ sở chăm sóc và công trình phục vụ cộng đồng.' },
    { title: 'Nền móng và cọc', description: 'Năng lực nổi bật trong kiểm tra sức chịu tải, đánh giá chất lượng và sự toàn vẹn của cọc bằng nhiều phương pháp chuyên sâu.' },
    { title: 'PCCC và kỹ thuật công trình', description: 'Có hồ sơ pháp lý về điều kiện kinh doanh dịch vụ PCCC và kinh nghiệm phối hợp các hạng mục kỹ thuật công trình.' },
    { title: 'Kiểm định – vật liệu – phòng thí nghiệm', description: 'Hệ thống thí nghiệm và kiểm định phục vụ đánh giá vật tư, vật liệu, kết cấu và chất lượng công trình xây dựng.' },
  ],
  projects: [
    {
      slug: 'cao-toc-huu-nghi-chi-lang',
      title: 'Tuyến cao tốc Hữu Nghị – Chi Lăng',
      category: 'Giao thông hạ tầng',
      meta: 'Lạng Sơn · Thí nghiệm phục vụ xây dựng',
      description: 'TDS tham gia thí nghiệm phục vụ thi công cho nhiều gói thầu trên tuyến cao tốc từ cửa khẩu Hữu Nghị – Chi Lăng.',
      challenge: 'Dự án hạ tầng giao thông quy mô lớn yêu cầu kiểm soát chất lượng đồng bộ cho nhiều gói thầu, nhiều hạng mục đường và cầu.',
      solution: ['Triển khai thí nghiệm phục vụ xây dựng cho nhiều phân đoạn tuyến', 'Phối hợp nhiều gói thầu cầu và đường trên cùng dự án', 'Cung cấp dữ liệu kỹ thuật phục vụ kiểm soát thi công'],
      outcomes: ['Đáp ứng yêu cầu thí nghiệm cho dự án cao tốc', 'Hỗ trợ kiểm soát chất lượng các gói thi công', 'Khẳng định năng lực tham gia các công trình hạ tầng quy mô lớn'],
      gallery: ['Gói XL09-HNCL', 'Gói XL10-HNCL', 'Gói XL27-HNCL và các gói cầu liên quan'],
    },
    {
      slug: 'cau-rao-1-va-song-hoa',
      title: 'Các dự án cầu Rào 1 và cầu Sông Hóa',
      category: 'Khảo sát giao thông',
      meta: 'Hải Phòng · Tư vấn khảo sát',
      description: 'TDS thực hiện tư vấn khảo sát phục vụ báo cáo nghiên cứu khả thi và điều chỉnh dự án cho các công trình giao thông trọng điểm.',
      challenge: 'Các dự án cầu yêu cầu dữ liệu khảo sát tin cậy để phục vụ nghiên cứu khả thi, điều chỉnh phương án và chuẩn bị triển khai đầu tư.',
      solution: ['Thực hiện khảo sát phục vụ lập báo cáo nghiên cứu khả thi', 'Bổ sung dữ liệu cho các bước điều chỉnh dự án', 'Đảm bảo hồ sơ khảo sát hỗ trợ tốt cho công tác lập phương án'],
      outcomes: ['Cung cấp nền tảng kỹ thuật cho bước chuẩn bị đầu tư', 'Hỗ trợ hoàn thiện hồ sơ dự án giao thông', 'Thể hiện kinh nghiệm khảo sát cho công trình cầu và kết nối liên tỉnh'],
      gallery: ['Dự án cầu Rào 1', 'Dự án cầu Sông Hóa', 'Hồ sơ khảo sát phục vụ FS và điều chỉnh dự án'],
    },
    {
      slug: 'du-an-gamuda-va-coc-khoan-nhoi',
      title: 'Thí nghiệm cọc cho các dự án khu đô thị và nhà cao tầng',
      category: 'Nền móng – cọc',
      meta: 'Hà Nội và nhiều địa phương · PDA / PIT / nén tĩnh / siêu âm',
      description: 'TDS có nhiều dự án thí nghiệm cọc cho khu đô thị, nhà ở, nhà cao tầng, công trình dân dụng và hạ tầng.',
      challenge: 'Các dự án nền móng yêu cầu kiểm tra sức chịu tải, sự toàn vẹn và chất lượng cọc bằng nhiều phương pháp khác nhau tùy điều kiện công trình.',
      solution: ['Thực hiện nén tĩnh cọc, PDA, PIT và siêu âm cọc', 'Khoan lấy lõi và kiểm tra cọc khoan nhồi khi cần', 'Kết hợp nhiều phép thử để đánh giá toàn diện chất lượng móng cọc'],
      outcomes: ['Hỗ trợ chủ đầu tư và nhà thầu đánh giá chất lượng nền móng', 'Cung cấp cơ sở dữ liệu kỹ thuật phục vụ nghiệm thu', 'Tạo nên một trong những mảng năng lực nổi bật nhất của TDS'],
      gallery: ['Gamuda Garden', 'Các dự án chung cư và nhà cao tầng', 'Các công trình cầu và nền móng chuyên sâu'],
    },
  ],
  values: [
    { title: 'Lấy chữ TÂM làm nền tảng', description: 'TDS đề cao đạo đức nghề nghiệp, thượng tôn pháp luật và luôn coi uy tín là tài sản quan trọng trong kinh doanh.' },
    { title: 'Khách hàng là trung tâm', description: 'Lợi ích và sự hài lòng của khách hàng được xem là thước đo thành công của sản phẩm và dịch vụ.' },
    { title: 'Chất lượng đi cùng tiến độ', description: 'TDS theo đuổi mục tiêu hoàn thành công việc đúng hạn nhưng luôn giữ nguyên tắc không làm nhanh theo cách ẩu đoảng.' },
    { title: 'Không ngừng học hỏi và cải tiến', description: 'Doanh nghiệp hướng tới ứng dụng tiến bộ khoa học, kỹ thuật và công nghệ mới vào quản lý, sản xuất và triển khai dịch vụ.' },
  ],
  process: [
    { title: 'Tiếp nhận yêu cầu', description: 'Làm rõ loại công trình, mục tiêu đầu tư, phạm vi công việc và yêu cầu kỹ thuật của dự án.' },
    { title: 'Khảo sát và thu thập dữ liệu', description: 'Thực hiện khảo sát hiện trường, rà soát hồ sơ pháp lý, điều kiện kỹ thuật và các yếu tố liên quan.' },
    { title: 'Đề xuất giải pháp kỹ thuật', description: 'Lựa chọn phương án khảo sát, thí nghiệm, kiểm định, tư vấn hoặc thi công phù hợp nhất với bài toán thực tế.' },
    { title: 'Triển khai đồng bộ', description: 'Tổ chức nhân sự, thiết bị, phòng thí nghiệm và hiện trường để triển khai công việc theo kế hoạch.' },
    { title: 'Bàn giao kết quả và đồng hành', description: 'Phát hành hồ sơ, báo cáo, kết quả kỹ thuật và phối hợp cùng khách hàng trong các bước tiếp theo của dự án.' },
  ],
  news: [
    {
      slug: 'thi-nghiem-coc-la-gi-va-khi-nao-can-thuc-hien',
      title: 'Thí nghiệm cọc là gì và khi nào cần thực hiện?',
      category: 'Kiến thức chuyên môn',
      date: '06.05.2026',
      summary: 'Giới thiệu vai trò của các phương pháp nén tĩnh, PDA, PIT, siêu âm và kiểm tra cọc trong kiểm soát chất lượng nền móng.',
      content: ['Trong các dự án có sử dụng móng cọc, việc kiểm tra sức chịu tải và chất lượng cọc là bước quan trọng để đánh giá an toàn và độ tin cậy của kết cấu.', 'Tùy loại công trình và yêu cầu thiết kế, có thể áp dụng các phương pháp như nén tĩnh cọc, PDA, PIT, siêu âm hoặc khoan lấy lõi để đánh giá chất lượng cọc.', 'Một kế hoạch thí nghiệm phù hợp sẽ giúp chủ đầu tư, tư vấn và nhà thầu giảm rủi ro kỹ thuật trong quá trình thi công và nghiệm thu.'],
      takeaways: ['Thí nghiệm cọc là phần quan trọng trong quản lý chất lượng nền móng', 'Mỗi phương pháp phù hợp với một mục tiêu kiểm tra khác nhau', 'Cần lựa chọn giải pháp thí nghiệm theo đúng bài toán công trình'],
    },
    {
      slug: 'vai-tro-cua-khao-sat-dia-chat-trong-lap-du-an',
      title: 'Vai trò của khảo sát địa chất trong giai đoạn chuẩn bị đầu tư',
      category: 'Khảo sát công trình',
      date: '06.05.2026',
      summary: 'Khảo sát địa chất là dữ liệu nền quan trọng để lập dự án, thiết kế và lựa chọn giải pháp móng phù hợp.',
      content: ['Khảo sát địa chất cung cấp cơ sở dữ liệu ban đầu về điều kiện nền đất, nước ngầm và các yếu tố ảnh hưởng trực tiếp đến giải pháp kỹ thuật công trình.', 'Nếu khảo sát không đầy đủ hoặc thiếu độ tin cậy, rủi ro điều chỉnh thiết kế và phát sinh trong thi công sẽ tăng lên đáng kể.', 'Với các dự án dân dụng, công nghiệp và hạ tầng, hồ sơ khảo sát địa chất chất lượng là một trong những yếu tố quyết định hiệu quả đầu tư.'],
      takeaways: ['Khảo sát địa chất ảnh hưởng trực tiếp đến giải pháp thiết kế', 'Dữ liệu khảo sát tốt giúp giảm rủi ro phát sinh', 'Đây là bước nền cần được đầu tư bài bản ngay từ đầu'],
    },
    {
      slug: 'kiem-dinh-chat-luong-cong-trinh-giup-kiem-soat-rui-ro-ra-sao',
      title: 'Kiểm định chất lượng công trình giúp kiểm soát rủi ro như thế nào?',
      category: 'Kiểm định công trình',
      date: '06.05.2026',
      summary: 'Kiểm định chất lượng không chỉ phục vụ nghiệm thu mà còn giúp phát hiện sớm rủi ro kỹ thuật và bảo vệ hiệu quả đầu tư.',
      content: ['Kiểm định chất lượng công trình là công cụ quan trọng để đánh giá hiện trạng, kiểm tra sự phù hợp của vật liệu, cấu kiện và kết cấu với yêu cầu kỹ thuật.', 'Trong nhiều trường hợp, kiểm định còn là cơ sở để đưa ra quyết định sửa chữa, gia cường, cải tạo hoặc tiếp tục khai thác công trình.', 'Việc kết hợp kiểm định hiện trường với dữ liệu phòng thí nghiệm giúp tạo nên bức tranh đánh giá khách quan và có giá trị cho quản lý dự án.'],
      takeaways: ['Kiểm định giúp nhận diện sớm các rủi ro kỹ thuật', 'Là cơ sở quan trọng cho nghiệm thu và đánh giá hiện trạng', 'Dữ liệu kiểm định tốt giúp chủ đầu tư ra quyết định chính xác hơn'],
    },
  ],
  jobs: [
    {
      slug: 'ky-su-dia-chat-va-khao-sat-cong-trinh',
      title: 'Kỹ sư địa chất và khảo sát công trình',
      department: 'Khảo sát – Địa chất',
      type: 'Toàn thời gian',
      location: 'Hà Nội / Công trường',
      summary: 'Tham gia khảo sát địa chất công trình, lập phương án khảo sát và phối hợp xử lý dữ liệu kỹ thuật hiện trường.',
      requirements: ['Tốt nghiệp chuyên ngành địa chất, xây dựng hoặc tương đương', 'Có khả năng làm việc hiện trường', 'Cẩn thận trong xử lý số liệu và hồ sơ kỹ thuật'],
      benefits: ['Môi trường làm việc chuyên môn thực tế', 'Cơ hội tham gia dự án đa lĩnh vực', 'Được phát triển năng lực khảo sát và nền móng'],
      responsibilities: ['Tham gia công tác khảo sát hiện trường', 'Phối hợp khoan khảo sát và thu thập dữ liệu', 'Lập và hoàn thiện hồ sơ kết quả khảo sát'],
    },
    {
      slug: 'ky-su-thi-nghiem-kiem-dinh',
      title: 'Kỹ sư thí nghiệm và kiểm định',
      department: 'Thí nghiệm – Kiểm định',
      type: 'Toàn thời gian',
      location: 'Hà Nội / Hiện trường',
      summary: 'Thực hiện thí nghiệm vật liệu, thí nghiệm cọc và kiểm định chất lượng công trình theo yêu cầu kỹ thuật của dự án.',
      requirements: ['Am hiểu thí nghiệm chuyên ngành xây dựng là lợi thế', 'Có tinh thần trách nhiệm và kỷ luật công trường', 'Sẵn sàng phối hợp công việc tại hiện trường và phòng lab'],
      benefits: ['Làm việc với các dự án thật và dữ liệu kỹ thuật thật', 'Mở rộng kinh nghiệm kiểm định chất lượng công trình', 'Cơ hội phát triển chuyên sâu trong lĩnh vực nền móng và vật liệu'],
      responsibilities: ['Triển khai thí nghiệm theo phương án đã phê duyệt', 'Ghi nhận và xử lý kết quả thí nghiệm', 'Phối hợp phát hành báo cáo kỹ thuật'],
    },
    {
      slug: 'ky-su-xay-dung-va-tu-van-du-an',
      title: 'Kỹ sư xây dựng và tư vấn dự án',
      department: 'Tư vấn – Thi công',
      type: 'Toàn thời gian',
      location: 'Hà Nội',
      summary: 'Phối hợp triển khai công việc tư vấn xây dựng, thẩm tra kỹ thuật và hỗ trợ quản lý hồ sơ dự án.',
      requirements: ['Nền tảng chuyên môn xây dựng tốt', 'Có khả năng đọc và rà soát hồ sơ kỹ thuật', 'Tư duy hệ thống và làm việc nhóm hiệu quả'],
      benefits: ['Môi trường làm việc chuyên nghiệp, năng động', 'Tiếp cận nhiều nhóm dự án từ dân dụng đến hạ tầng', 'Cơ hội phát triển cùng doanh nghiệp định hướng bền vững'],
      responsibilities: ['Rà soát hồ sơ dự án và hồ sơ kỹ thuật', 'Phối hợp tư vấn giải pháp kỹ thuật', 'Hỗ trợ triển khai công việc với chủ đầu tư và các bên liên quan'],
    },
  ],
  cta: {
    eyebrow: 'Kết nối cùng TDS Việt Nam',
    title: 'Trao đổi nhu cầu khảo sát, thí nghiệm, kiểm định hoặc thi công cho dự án của bạn',
    description:
      'Chia sẻ loại công trình, giai đoạn dự án và nhu cầu kỹ thuật. TDS Việt Nam sẽ cùng bạn xác định phạm vi công việc và giải pháp phù hợp, khả thi và hiệu quả.',
    primaryAction: 'Liên hệ tư vấn',
    secondaryAction: 'Gửi thông tin dự án',
  },
  footer: {
    company: 'Công ty Cổ phần TDS Việt Nam',
    description: 'Doanh nghiệp hoạt động trong lĩnh vực thi công xây lắp, khảo sát, thí nghiệm, kiểm định và tư vấn xây dựng.',
    address: 'Số 47, tổ 50 phường Nghĩa Đô, thành phố Hà Nội, Việt Nam',
    email: 'tdsvietnam@gmail.com',
    phone: '024.32009827',
    links: [
      { label: 'Dịch vụ', href: '/dich-vu' },
      { label: 'Dự án', href: '/du-an' },
      { label: 'Tin tức', href: '/tin-tuc' },
      { label: 'Tuyển dụng', href: '/tuyen-dung' },
      { label: 'Liên hệ', href: '/lien-he' },
    ],
  },
}
