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
    eyebrow: 'TDS Construction Design',
    title: 'Giải pháp thiết kế xây dựng hiện đại cho công trình dân dụng, công cộng và công nghiệp',
    description:
      'TDS tập trung vào thiết kế 2D kỹ thuật, phối cảnh 3D, tổ chức công năng và phát triển phương án không gian cho tòa nhà, trường học, bệnh viện, công trình công cộng, khu công nghiệp và nhà xưởng.',
    primaryAction: 'Khám phá dịch vụ',
    secondaryAction: 'Xem dự án tiêu biểu',
    metrics: [
      { value: '2D + 3D', label: 'Năng lực triển khai đồng bộ' },
      { value: 'Multi-sector', label: 'Đa dạng loại hình công trình' },
      { value: 'Function-led', label: 'Ưu tiên công năng và vận hành' },
    ],
    highlights: [
      'Thiết kế tòa nhà, trường học, bệnh viện, công trình công cộng',
      'Thiết kế khu công nghiệp và nhà xưởng theo logic sử dụng thực tế',
      'Ngôn ngữ kiến trúc hiện đại, hệ thống, rõ ràng và dễ triển khai',
    ],
  },
  aboutSnapshot: {
    eyebrow: 'Về TDS',
    title: 'Thiết kế không chỉ đẹp mà còn phải đúng nhu cầu sử dụng',
    description:
      'TDS xây dựng giải pháp thiết kế dựa trên mục tiêu vận hành, luồng sử dụng và tính hiệu quả của từng không gian. Mỗi dự án được phát triển theo tư duy kỹ thuật, thẩm mỹ và khả năng triển khai thực tế.',
    stats: [
      { value: '02D', label: 'Triển khai bản vẽ AutoCAD chuẩn chỉnh' },
      { value: '03D', label: 'Phối cảnh trực quan, thuyết phục' },
      { value: '08+', label: 'Nhóm lĩnh vực công trình trọng tâm' },
      { value: 'UX Space', label: 'Tối ưu trải nghiệm sử dụng không gian' },
    ],
  },
  services: [
    {
      slug: 'thiet-ke-2d-ky-thuat',
      title: 'Thiết kế 2D kỹ thuật',
      description: 'Triển khai bản vẽ mặt bằng, mặt đứng, mặt cắt và hồ sơ kỹ thuật rõ ràng cho quá trình phát triển phương án.',
      deliverables: ['Mặt bằng chức năng', 'Hồ sơ AutoCAD', 'Bản vẽ triển khai cơ sở'],
      audience: ['Chủ đầu tư cần hồ sơ thiết kế nền tảng', 'Dự án cần làm rõ tổ chức mặt bằng', 'Công trình yêu cầu phối hợp kỹ thuật sớm'],
      process: ['Khảo sát nhu cầu', 'Xây dựng mặt bằng sơ bộ', 'Triển khai bản vẽ kỹ thuật', 'Rà soát và hoàn thiện hồ sơ'],
      scope: ['Bố trí công năng tổng thể', 'Mặt bằng chi tiết từng tầng', 'Mặt đứng và mặt cắt', 'Hồ sơ trình bày phục vụ duyệt phương án'],
      faq: [
        { question: 'Dịch vụ này có phù hợp cho công trình cải tạo không?', answer: 'Có. TDS có thể phát triển bản vẽ 2D cho cả công trình mới lẫn công trình cần tổ chức lại mặt bằng hiện trạng.' },
        { question: 'Hồ sơ 2D gồm những gì?', answer: 'Tùy phạm vi dự án, hồ sơ có thể bao gồm mặt bằng, mặt đứng, mặt cắt, sơ đồ giao thông và các bản vẽ triển khai cơ sở.' },
      ],
    },
    {
      slug: 'thiet-ke-3d-phoi-canh',
      title: 'Thiết kế 3D phối cảnh',
      description: 'Mô phỏng không gian, vật liệu và hình ảnh công trình nhằm giúp khách hàng hình dung phương án trực quan.',
      deliverables: ['Phối cảnh ngoại thất', 'Phối cảnh nội thất', 'Góc nhìn trình bày'],
      audience: ['Dự án cần thuyết trình ý tưởng', 'Phương án cần hình ảnh trực quan', 'Chủ đầu tư muốn đánh giá thẩm mỹ không gian'],
      process: ['Nhận bản vẽ nền', 'Dựng khối 3D', 'Hiệu chỉnh vật liệu và ánh sáng', 'Xuất bộ ảnh hoàn thiện'],
      scope: ['Dựng phối cảnh concept', 'Thiết lập màu sắc và vật liệu', 'Tạo góc nhìn chính', 'Chuẩn bị hình ảnh trình bày dự án'],
      faq: [
        { question: 'TDS có dựng phối cảnh từ bản vẽ có sẵn không?', answer: 'Có. Nếu bạn đã có bản vẽ 2D hoặc concept sơ bộ, TDS có thể tiếp nhận và phát triển phần trình bày 3D.' },
        { question: 'Có thể yêu cầu nhiều phong cách khác nhau không?', answer: 'Có. TDS có thể đề xuất các hướng phối cảnh khác nhau để hỗ trợ chủ đầu tư so sánh phương án.' },
      ],
    },
    {
      slug: 'thiet-ke-kien-truc-cong-trinh',
      title: 'Thiết kế kiến trúc công trình',
      description: 'Phát triển concept và giải pháp kiến trúc cho nhiều loại hình công trình từ dân dụng đến công cộng và công nghiệp.',
      deliverables: ['Concept kiến trúc', 'Tổ chức mặt bằng', 'Giải pháp mặt đứng'],
      audience: ['Tòa nhà', 'Trường học', 'Bệnh viện', 'Công trình công cộng'],
      process: ['Nghiên cứu bài toán sử dụng', 'Đề xuất concept', 'Tinh chỉnh tổ chức không gian', 'Triển khai hồ sơ trình bày'],
      scope: ['Nghiên cứu hình khối và ngôn ngữ mặt đứng', 'Định hướng hình ảnh tổng thể công trình', 'Thiết lập trục giao thông và zoning', 'Xử lý cân bằng giữa thẩm mỹ và vận hành'],
      faq: [
        { question: 'TDS có nhận công trình quy mô lớn không?', answer: 'Có. TDS định vị là đơn vị thiết kế cho cả công trình dân dụng, công cộng và công nghiệp với logic công năng rõ ràng.' },
        { question: 'Có thể kết hợp cả 2D và 3D trong cùng gói không?', answer: 'Có. Đây cũng là cách tiếp cận TDS ưu tiên để bản vẽ kỹ thuật và hình ảnh trình bày hỗ trợ lẫn nhau.' },
      ],
    },
    {
      slug: 'thiet-ke-canh-quan',
      title: 'Thiết kế cảnh quan',
      description: 'Kết nối công trình với không gian mở, mảng xanh và trải nghiệm di chuyển tổng thể.',
      deliverables: ['Tổng mặt bằng cảnh quan', 'Phân khu ngoài trời', 'Điểm nhấn không gian'],
      audience: ['Khuôn viên trường học', 'Công trình công cộng', 'Tổ hợp văn phòng', 'Dự án có không gian mở lớn'],
      process: ['Phân tích bối cảnh', 'Đề xuất zoning', 'Phát triển điểm nhấn cảnh quan', 'Hoàn thiện phương án'],
      scope: ['Bố trí mảng xanh và quảng trường', 'Định hướng vật liệu ngoài trời', 'Tạo chuỗi trải nghiệm tiếp cận', 'Kết nối công trình với không gian mở'],
      faq: [
        { question: 'Thiết kế cảnh quan có thể đi riêng với công trình không?', answer: 'Có. TDS có thể triển khai cảnh quan như một hạng mục độc lập hoặc phát triển đồng bộ cùng kiến trúc công trình.' },
        { question: 'TDS có chú trọng yếu tố vận hành cảnh quan?', answer: 'Có. Mỗi đề xuất cảnh quan đều được xem xét cả trải nghiệm sử dụng lẫn tính duy trì, bảo trì về sau.' },
      ],
    },
    {
      slug: 'toi-uu-cong-nang-su-dung',
      title: 'Tối ưu công năng sử dụng',
      description: 'Phân tích nhu cầu sử dụng và tái cấu trúc không gian nhằm nâng cao hiệu quả vận hành.',
      deliverables: ['Sơ đồ công năng', 'Luồng di chuyển', 'Đề xuất tối ưu diện tích'],
      audience: ['Văn phòng', 'Bệnh viện', 'Nhà xưởng', 'Công trình cải tạo'],
      process: ['Đánh giá hiện trạng', 'Phân tích luồng sử dụng', 'Tái cấu trúc khu chức năng', 'Đề xuất giải pháp tối ưu'],
      scope: ['Khảo sát hành vi sử dụng thực tế', 'Tổ chức lại chuỗi không gian', 'Tối ưu diện tích và lưu thông', 'Đưa ra phương án cải thiện vận hành'],
      faq: [
        { question: 'Dịch vụ này phù hợp nhất với loại công trình nào?', answer: 'Đặc biệt hiệu quả với văn phòng, bệnh viện, nhà xưởng và các dự án đang gặp vấn đề về tổ chức sử dụng không gian.' },
        { question: 'Có cần thay đổi toàn bộ kiến trúc công trình không?', answer: 'Không nhất thiết. Nhiều trường hợp chỉ cần tái cấu trúc chức năng và luồng sử dụng là đã cải thiện đáng kể hiệu quả.' },
      ],
    },
    {
      slug: 'tu-van-giai-phap-thiet-ke',
      title: 'Tư vấn giải pháp thiết kế',
      description: 'Định hướng thiết kế phù hợp mục tiêu đầu tư, tính chất công trình và nhu cầu khai thác dài hạn.',
      deliverables: ['Tư vấn định hướng', 'Phương án sơ bộ', 'Khuyến nghị triển khai'],
      audience: ['Chủ đầu tư mới bắt đầu dự án', 'Dự án đa lĩnh vực', 'Công trình cần phân tích tiền khả thi'],
      process: ['Tiếp nhận yêu cầu', 'Phân tích ưu tiên', 'Đề xuất chiến lược thiết kế', 'Chốt định hướng triển khai'],
      scope: ['Làm rõ mục tiêu đầu tư', 'Định hình yêu cầu thiết kế', 'Đề xuất hướng tiếp cận phù hợp', 'Xác định roadmap triển khai ban đầu'],
      faq: [
        { question: 'Tư vấn giải pháp thiết kế khác gì so với thiết kế cụ thể?', answer: 'Đây là giai đoạn giúp chủ đầu tư chốt đúng hướng đi trước khi bước vào triển khai hồ sơ chi tiết.' },
        { question: 'Dịch vụ này có phù hợp với người chưa có brief rõ ràng không?', answer: 'Rất phù hợp. TDS có thể giúp hệ thống hóa nhu cầu và chuyển chúng thành đầu bài thiết kế rõ ràng.' },
      ],
    },
  ],
  sectors: [
    { title: 'Tòa nhà', description: 'Giải pháp kiến trúc hiện đại, tổ chức mặt bằng hiệu quả và phù hợp bối cảnh đô thị.' },
    { title: 'Trường học', description: 'Không gian học tập, lưu thông và vận hành được xử lý khoa học, an toàn và rõ cấu trúc.' },
    { title: 'Bệnh viện', description: 'Chú trọng phân khu chức năng, luồng di chuyển và tính thuận tiện trong sử dụng.' },
    { title: 'Công trình công cộng', description: 'Đề cao khả năng tiếp cận, tổ chức không gian cộng đồng và trải nghiệm tổng thể.' },
    { title: 'Khu công nghiệp', description: 'Thiết kế tổng thể đồng bộ, hỗ trợ phát triển lâu dài và tổ chức hạ tầng rõ ràng.' },
    { title: 'Nhà xưởng', description: 'Tối ưu luồng vận hành, hiệu quả sử dụng diện tích và tính khả thi khi triển khai.' },
    { title: 'Văn phòng', description: 'Tạo môi trường làm việc hiệu quả, chuyên nghiệp và phản ánh bản sắc doanh nghiệp.' },
    { title: 'Cảnh quan', description: 'Gắn kết công trình với mảng xanh và không gian mở để nâng cao chất lượng trải nghiệm.' },
  ],
  projects: [
    {
      slug: 'khoi-nha-dieu-hanh-khu-cong-nghiep',
      title: 'Khối nhà điều hành khu công nghiệp',
      category: 'Khu công nghiệp',
      meta: 'Bắc Ninh · 12.000m²',
      description: 'Tập trung tổ chức luồng tiếp cận, phân khu vận hành và hình ảnh kiến trúc đồng bộ cho toàn khu.',
      challenge: 'Dự án cần đồng thời giải quyết hình ảnh doanh nghiệp, luồng vận hành và khả năng mở rộng lâu dài.',
      solution: ['Tách rõ khu điều hành và khu hậu cần', 'Tạo trục tiếp cận trực quan', 'Đồng bộ mặt đứng và cảnh quan cổng vào'],
      outcomes: ['Tăng rõ nhận diện khu điều hành', 'Cải thiện logic tiếp cận cho khách và nội bộ', 'Tạo nền tảng mở rộng giai đoạn sau'],
      gallery: ['Phối cảnh cổng vào', 'Sơ đồ tổ chức mặt bằng', 'Khối nhà điều hành nhìn từ sân trung tâm'],
    },
    {
      slug: 'truong-lien-cap-hien-dai',
      title: 'Trường liên cấp định hướng hiện đại',
      category: 'Giáo dục',
      meta: 'Hà Nội · 8.500m²',
      description: 'Phát triển không gian học tập có tính kết nối, ánh sáng tốt và giao thông nội bộ rõ ràng.',
      challenge: 'Bài toán là tổ chức không gian linh hoạt cho nhiều khối tuổi và đảm bảo vận hành an toàn.',
      solution: ['Phân lớp khu học tập', 'Tối ưu sân trong và mảng xanh', 'Tạo chuỗi giao thông ngắn, dễ kiểm soát'],
      outcomes: ['Cải thiện chất lượng không gian học tập', 'Tăng khả năng giám sát giao thông nội bộ', 'Nâng cao cảm giác mở và thân thiện'],
      gallery: ['Phối cảnh sân trung tâm', 'Sơ đồ phân khu học tập', 'Mặt đứng khối lớp học'],
    },
    {
      slug: 'trung-tam-y-te-khu-vuc',
      title: 'Trung tâm y tế khu vực',
      category: 'Y tế',
      meta: 'Đà Nẵng · 6.200m²',
      description: 'Giải quyết bài toán phân khu chức năng, luồng khám chữa bệnh và tính thuận tiện trong vận hành.',
      challenge: 'Yêu cầu cân bằng giữa công năng nghiêm ngặt, sự thuận tiện cho người dùng và hình ảnh công trình thân thiện.',
      solution: ['Phân khu tiếp nhận rõ ràng', 'Tối ưu giao thông dọc', 'Tổ chức ánh sáng tự nhiên tại vùng chờ'],
      outcomes: ['Rút ngắn hành trình tiếp cận các khu chức năng', 'Tăng trải nghiệm người dùng tại khu chờ', 'Củng cố hình ảnh cơ sở y tế hiện đại'],
      gallery: ['Khu tiếp nhận bệnh nhân', 'Sơ đồ luồng khám chữa bệnh', 'Phối cảnh sảnh và khu chờ'],
    },
  ],
  values: [
    { title: 'Tư duy công năng rõ ràng', description: 'Mỗi phương án đều bắt đầu từ nhu cầu sử dụng, luồng di chuyển và hiệu quả vận hành thực tế.' },
    { title: 'Triển khai 2D – 3D đồng bộ', description: 'Từ bản vẽ kỹ thuật đến phối cảnh trình bày, mọi dữ liệu thiết kế đều được kết nối logic.' },
    { title: 'Đa dạng lĩnh vực công trình', description: 'Kinh nghiệm thiết kế cho dân dụng, công cộng và công nghiệp giúp TDS linh hoạt theo từng bài toán.' },
    { title: 'Ngôn ngữ thiết kế hiện đại', description: 'Giữ cân bằng giữa thẩm mỹ, hệ thống và tính khả thi để tạo ra giải pháp bền vững.' },
  ],
  process: [
    { title: 'Tiếp nhận yêu cầu', description: 'Làm rõ mục tiêu sử dụng, quy mô công trình, đối tượng khai thác và ưu tiên đầu tư.' },
    { title: 'Khảo sát & phân tích', description: 'Đánh giá hiện trạng, bối cảnh, dòng sử dụng và các điều kiện ảnh hưởng đến giải pháp thiết kế.' },
    { title: 'Đề xuất phương án', description: 'Xây dựng concept, sơ đồ công năng và hướng kiến trúc phù hợp với từng loại hình công trình.' },
    { title: 'Triển khai 2D / 3D', description: 'Thể hiện phương án qua bản vẽ kỹ thuật và phối cảnh trực quan để hỗ trợ đánh giá và quyết định.' },
    { title: 'Hoàn thiện hồ sơ', description: 'Chuẩn hóa tài liệu bàn giao, tối ưu khả năng triển khai và đồng hành cho các bước phát triển tiếp theo.' },
  ],
  news: [
    {
      slug: 'vai-tro-phoi-canh-3d',
      title: 'Vai trò của phối cảnh 3D trong trình bày phương án thiết kế xây dựng',
      category: 'Kiến thức chuyên môn',
      date: '24.04.2026',
      summary: 'Cách hình ảnh 3D giúp chủ đầu tư đánh giá phương án nhanh hơn và hạn chế sai lệch kỳ vọng.',
      content: ['Phối cảnh 3D giúp làm rõ tinh thần thiết kế ngay từ giai đoạn sớm.', 'Nó đặc biệt hữu ích với công trình đa khối chức năng hoặc yêu cầu truyền đạt thuyết phục.', 'Khi kết hợp cùng bản vẽ 2D, 3D tạo nên hệ trình bày đủ sâu cho cả kỹ thuật lẫn cảm nhận không gian.'],
      takeaways: ['3D tăng tốc độ ra quyết định', '3D giảm khoảng cách giữa ý tưởng và kỳ vọng', '3D đặc biệt quan trọng trong các dự án cần thuyết trình phương án'],
    },
    {
      slug: 'toi-uu-cong-nang-nha-xuong',
      title: 'Tối ưu công năng trong thiết kế nhà xưởng: bắt đầu từ đâu?',
      category: 'Công nghiệp',
      date: '22.04.2026',
      summary: 'Những nguyên tắc quan trọng khi tổ chức mặt bằng và luồng vận hành cho công trình nhà xưởng.',
      content: ['Điểm bắt đầu luôn là logic sản xuất và giao thông nội bộ.', 'Thiết kế tốt phải tách bạch luồng người, hàng hóa và vùng hỗ trợ.', 'Một mặt bằng rõ ràng sẽ giúp giảm xung đột vận hành về sau.'],
      takeaways: ['Bắt đầu từ logic vận hành', 'Tách luồng là nguyên tắc quan trọng', 'Mặt bằng tốt giúp giảm xung đột sử dụng'],
    },
    {
      slug: 'thiet-ke-truong-hoc-hien-dai',
      title: 'Thiết kế trường học hiện đại: cân bằng giữa vận hành và trải nghiệm',
      category: 'Giáo dục',
      date: '20.04.2026',
      summary: 'Gợi ý cách tiếp cận không gian học tập thân thiện, rõ chức năng và hỗ trợ lưu thông hiệu quả.',
      content: ['Trường học cần nhiều hơn một sơ đồ phòng học đúng chuẩn.', 'Không gian chuyển tiếp, sân chơi và lưu thông tạo nên chất lượng trải nghiệm tổng thể.', 'Thiết kế hiệu quả là thiết kế giúp học sinh, giáo viên và vận hành nội bộ cùng thuận tiện.'],
      takeaways: ['Không gian chuyển tiếp quan trọng', 'Trải nghiệm học tập không chỉ nằm trong lớp học', 'Thiết kế tốt phải đồng thời phục vụ học sinh và vận hành'],
    },
  ],
  jobs: [
    {
      slug: 'kien-truc-su-thiet-ke-cong-trinh',
      title: 'Kiến trúc sư thiết kế công trình',
      department: 'Architecture',
      type: 'Full-time',
      location: 'Hà Nội',
      summary: 'Tham gia phát triển concept và giải pháp kiến trúc cho các công trình dân dụng, công cộng và công nghiệp.',
      requirements: ['Tư duy thiết kế tốt', 'Khả năng phát triển phương án kiến trúc', 'Làm việc nhóm hiệu quả'],
      benefits: ['Môi trường chuyên môn rõ ràng', 'Dự án đa dạng lĩnh vực', 'Cơ hội phát triển năng lực thiết kế'],
      responsibilities: ['Nghiên cứu brief và bối cảnh dự án', 'Đề xuất concept và tổ chức không gian', 'Phối hợp triển khai với nhóm kỹ thuật và visual'],
    },
    {
      slug: 'hoa-vien-autocad-2d',
      title: 'Họa viên AutoCAD 2D',
      department: 'Technical Drawing',
      type: 'Full-time',
      location: 'Hà Nội',
      summary: 'Triển khai hồ sơ 2D kỹ thuật cho các dự án công trình theo quy chuẩn và yêu cầu của nhóm thiết kế.',
      requirements: ['Thành thạo AutoCAD', 'Cẩn thận với hồ sơ kỹ thuật', 'Khả năng phối hợp tốt với kiến trúc sư'],
      benefits: ['Quy trình làm việc rõ ràng', 'Cơ hội tham gia nhiều loại hình dự án', 'Môi trường chuyên môn ổn định'],
      responsibilities: ['Triển khai hồ sơ mặt bằng, mặt đứng, mặt cắt', 'Chuẩn hóa tài liệu theo yêu cầu dự án', 'Rà soát tính logic của hồ sơ kỹ thuật'],
    },
    {
      slug: '3d-visualizer',
      title: '3D Visualizer',
      department: 'Visualization',
      type: 'Full-time',
      location: 'Hybrid',
      summary: 'Phụ trách dựng phối cảnh 3D, hoàn thiện ánh sáng vật liệu và hình ảnh trình bày cho dự án.',
      requirements: ['Dựng hình tốt', 'Cảm quan thẩm mỹ tốt', 'Biết phối hợp với nhóm thiết kế'],
      benefits: ['Dự án có chiều sâu kiến trúc', 'Không gian phát triển visual language', 'Môi trường cộng tác linh hoạt'],
      responsibilities: ['Dựng mô hình 3D từ bản vẽ nền', 'Phát triển visual style theo dự án', 'Xuất bộ ảnh trình bày cho proposal và portfolio'],
    },
  ],
  cta: {
    eyebrow: 'Bắt đầu dự án cùng TDS',
    title: 'Cùng phát triển giải pháp thiết kế phù hợp nhất cho công trình của bạn',
    description:
      'Chia sẻ nhu cầu sử dụng, mục tiêu đầu tư và loại hình công trình. TDS sẽ cùng bạn xác định hướng thiết kế rõ ràng, khả thi và tối ưu vận hành.',
    primaryAction: 'Liên hệ tư vấn',
    secondaryAction: 'Gửi yêu cầu dự án',
  },
  footer: {
    company: 'TDS Construction Design',
    description: 'Đơn vị cung cấp dịch vụ thiết kế xây dựng chuyên sâu cho công trình dân dụng, công cộng và công nghiệp.',
    address: 'Hà Nội, Việt Nam',
    email: 'contact@tds-design.vn',
    phone: '+84 000 000 000',
    links: [
      { label: 'Dịch vụ', href: '/dich-vu' },
      { label: 'Dự án', href: '/du-an' },
      { label: 'Tin tức', href: '/tin-tuc' },
      { label: 'Tuyển dụng', href: '/tuyen-dung' },
      { label: 'Liên hệ', href: '/lien-he' },
    ],
  },
}
