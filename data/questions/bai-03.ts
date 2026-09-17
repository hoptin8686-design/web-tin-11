import { Question } from "@/lib/types";

// Bài 3: Phần mềm nguồn mở và phần mềm chạy trên Internet
export const questions: Question[] = [
  {
    "id": "b3-01",
    "q": "Phần mềm nguồn mở (Open Source Software) là gì?",
    "options": [
      "Phần mềm được công bố mã nguồn công khai, cho phép người dùng tự do xem, sửa đổi và phân phối lại",
      "Phần mềm chỉ cho phép một người duy nhất trên thế giới mở tệp tin mã nguồn",
      "Phần mềm bắt buộc phải trả phí hàng tháng để được phép sử dụng",
      "Phần mềm bị khóa mã nguồn và không ai có thể cài đặt được"
    ],
    "answer": 0,
    "explain": "Phần mềm nguồn mở công khai mã nguồn và cấp quyền theo các giấy phép tự do (như GPL, Apache, MIT) cho cộng đồng dùng, nghiên cứu, cải tiến."
  },
  {
    "id": "b3-02",
    "q": "Phần mềm thương mại (Commercial Software) thường có đặc điểm nào sau đây?",
    "options": [
      "Là phần mềm đóng mã nguồn, người dùng phải mua bản quyền (License) để sử dụng",
      "Mọi người đều được phép chỉnh sửa mã nguồn gốc và bán lại tùy ý",
      "Không bao giờ có sự hỗ trợ kỹ thuật từ nhà sản xuất",
      "Luôn luôn miễn phí cho mọi tổ chức và doanh nghiệp"
    ],
    "answer": 0,
    "explain": "Phần mềm thương mại được phát triển nhằm mục đích kinh doanh, nhà sản xuất giữ bí mật mã nguồn (mã nguồn đóng) và bán quyền sử dụng cho khách hàng."
  },
  {
    "id": "b3-03",
    "q": "Giấy phép mã nguồn mở công cộng GNU GPL có nguyên tắc đặc trưng nào sau đây?",
    "options": [
      "Nguyên tắc Copyleft: phần mềm phái sinh từ mã nguồn GPL khi phân phối cũng bắt buộc phải mở mã nguồn theo GPL",
      "Cho phép đóng mã nguồn và bán độc quyền mà không cần xin phép",
      "Cấm người dùng chia sẻ phần mềm cho bạn bè",
      "Bắt buộc phần mềm chỉ được chạy trên hệ điều hành Windows"
    ],
    "answer": 0,
    "explain": "GNU GPL có điều khoản bảo vệ tính tự do (Copyleft): bất kỳ tác phẩm phái sinh nào sử dụng mã GPL khi công bố cũng phải phát hành mã nguồn theo giấy phép GPL."
  },
  {
    "id": "b3-04",
    "q": "Cặp phần mềm nào sau đây là ví dụ điển hình về cặp 'Phần mềm thương mại đóng mã' và 'Phần mềm nguồn mở tương đương'?",
    "options": [
      "Microsoft Office và LibreOffice",
      "Adobe Photoshop và Microsoft Paint",
      "Google Chrome và Cốc Cốc",
      "Windows 11 và macOS"
    ],
    "answer": 0,
    "explain": "Microsoft Office là bộ công cụ văn phòng thương mại đóng mã nổi tiếng, còn LibreOffice là giải pháp nguồn mở tương đương hoàn toàn miễn phí."
  },
  {
    "id": "b3-05",
    "q": "Phần mềm chạy trên Internet (phần mềm đám mây / SaaS) có ưu điểm vượt trội nào?",
    "options": [
      "Truy cập và làm việc ở bất cứ đâu có Internet thông qua trình duyệt web mà không cần cài đặt phức tạp",
      "Có thể dùng tốt bình thường ngay cả khi máy tính bị mất điện hoàn toàn",
      "Không bao giờ cần tạo tài khoản để lưu trữ dữ liệu",
      "Tự động tăng gấp đôi tốc độ đường truyền cáp quang của gia đình"
    ],
    "answer": 0,
    "explain": "Phần mềm đám mây (SaaS như Google Docs, Canva) hoạt động trên trình duyệt, dữ liệu lưu trên máy chủ từ xa, giúp làm việc linh hoạt mọi lúc mọi nơi."
  },
  {
    "id": "b3-06",
    "q": "Ứng dụng nào sau đây KHÔNG PHẢI là phần mềm chạy trên Internet?",
    "options": [
      "Phần mềm vẽ Notepad mặc định trên máy tính không nối mạng",
      "Google Docs",
      "Canva",
      "Office 365 trực tuyến"
    ],
    "answer": 0,
    "explain": "Notepad là phần mềm ứng dụng cục bộ (cài đặt sẵn trên hệ điều hành), hoạt động độc lập không cần Internet hay trình duyệt."
  },
  {
    "id": "b3-07",
    "q": "Một rủi ro tiềm ẩn khi sử dụng các dịch vụ lưu trữ và phần mềm trên đám mây là gì?",
    "options": [
      "Phụ thuộc vào đường truyền Internet và nguy cơ lộ lọt dữ liệu nếu tài khoản bị chiếm đoạt",
      "Làm hỏng các vi mạch phần cứng của màn hình máy tính",
      "Khiến bàn phím máy tính bị gõ sai ký tự",
      "Tự động xóa tất cả các tệp tin lưu trên USB cá nhân"
    ],
    "answer": 0,
    "explain": "Nếu mất kết nối Internet, người dùng không thể truy cập dịch vụ; đồng thời nếu mật khẩu yếu hoặc thiếu 2FA thì tài khoản đám mây có thể bị xâm nhập."
  },
  {
    "id": "b3-08",
    "q": "Hệ điều hành Android và Linux là những minh chứng thành công nhất cho mô hình phát triển nào?",
    "options": [
      "Phần mềm mã nguồn mở",
      "Phần mềm đóng mã độc quyền",
      "Phần mềm chia sẻ dùng thử trả phí (Shareware)",
      "Phần mềm chạy riêng trên máy tính cổ điển"
    ],
    "answer": 0,
    "explain": "Nhân Linux và hệ điều hành di động Android là biểu tượng thành công vang dội của cộng đồng phát triển mã nguồn mở toàn cầu."
  },
  {
    "id": "b3-09",
    "q": "Lợi ích lớn nhất của phần mềm mã nguồn mở đối với giáo dục và nghiên cứu là gì?",
    "options": [
      "Tiết kiệm chi phí bản quyền và cho phép học sinh, sinh viên tìm hiểu cấu trúc mã nguồn để học tập lập trình",
      "Được nhà sản xuất tặng máy tính mới miễn phí",
      "Không cần phải học tập mà vẫn tự động giải được đề thi",
      "Thay thế hoàn toàn vai trò của giáo viên đứng lớp"
    ],
    "answer": 0,
    "explain": "Nguồn mở giúp nhà trường không tốn kinh phí mua bản quyền đắt đỏ, đồng thời người học có thể đọc trực tiếp mã nguồn để nâng cao kỹ năng tư duy lập trình."
  },
  {
    "id": "b3-10",
    "q": "Khái niệm 'Điện toán đám mây' (Cloud Computing) có thể hiểu một cách đơn giản là:",
    "options": [
      "Cung cấp các dịch vụ tài nguyên máy tính (máy chủ, lưu trữ, phần mềm) qua Internet theo nhu cầu",
      "Máy tính đặt trên khí cầu bay lơ lửng trong tầng khí quyển",
      "Hiện tượng thời tiết có mây mưa làm ảnh hưởng đến sóng vô tuyến",
      "Phần mềm dùng để dự báo thời tiết hàng ngày"
    ],
    "answer": 0,
    "explain": "Điện toán đám mây là mô hình cung ứng tài nguyên điện toán (lưu trữ, CPU, phần mềm) thông qua Internet, người dùng dùng đến đâu trả phí hoặc khai thác đến đó."
  },
  {
    "id": "b3-11",
    "q": "Tính năng cộng tác thời gian thực (Real-time Collaboration) trong Google Docs cho phép:",
    "options": [
      "Nhiều người dùng cùng mở, chỉnh sửa và nhận xét trên một văn bản tại cùng một thời điểm",
      "Tự động gửi thư rác đến tất cả người dùng trong danh bạ",
      "Tự động dịch văn bản sang 100 ngôn ngữ mà không cần kết nối mạng",
      "Khóa máy tính của các thành viên khác khi họ mở văn bản"
    ],
    "answer": 0,
    "explain": "Cộng tác thời gian thực là điểm mạnh của ứng dụng web, cho phép một nhóm làm việc chung trên một tệp tài liệu và thấy thao tác của nhau ngay lập tức."
  },
  {
    "id": "b3-12",
    "q": "Phần mềm mã nguồn mở GIMP thường được dùng để thay thế cho phần mềm thương mại nào?",
    "options": [
      "Adobe Photoshop",
      "Microsoft Word",
      "Windows Media Player",
      "AutoCAD"
    ],
    "answer": 0,
    "explain": "GIMP (GNU Image Manipulation Program) là phần mềm nguồn mở chuyên nghiệp xử lý ảnh bitmap, thường dùng thay thế Adobe Photoshop."
  },
  {
    "id": "b3-13",
    "q": "Thuật ngữ 'Freeware' (Phần mềm miễn phí) khác với 'Open Source Software' (Phần mềm nguồn mở) ở điểm cốt lõi nào?",
    "options": [
      "Freeware miễn phí sử dụng nhưng thường không cung cấp mã nguồn gốc",
      "Freeware bắt buộc phải trả tiền sau 30 ngày sử dụng",
      "Freeware cho phép người dùng tự do bán mã nguồn cho người khác",
      "Freeware chỉ chạy được trên điện thoại di động"
    ],
    "answer": 0,
    "explain": "Freeware là phần mềm miễn phí tiền sử dụng nhưng vẫn đóng mã nguồn (closed source); còn Open Source bắt buộc phải công khai mã nguồn."
  },
  {
    "id": "b3-14",
    "q": "Để sử dụng ứng dụng thiết kế đồ họa trực tuyến Canva, người dùng cần có:",
    "options": [
      "Thiết bị có kết nối Internet, trình duyệt web hiện đại và một tài khoản đăng nhập",
      "Một máy tính chuyên dụng có giá từ 100 triệu đồng trở lên",
      "Đĩa CD cài đặt bản quyền gửi từ nước ngoài",
      "Cáp kết nối trực tiếp với vệ tinh nhân tạo"
    ],
    "answer": 0,
    "explain": "Canva là ứng dụng chạy trên nền web (Web App), chỉ cần trình duyệt web (như Chrome, Edge) và mạng Internet là dùng được."
  },
  {
    "id": "b3-15",
    "q": "Khi tải phần mềm nguồn mở từ Internet về sử dụng, người dùng cần chú ý điều gì để đảm bảo an toàn?",
    "options": [
      "Tải từ trang web chính thức của dự án hoặc kho lưu trữ tin cậy (như GitHub, SourceForge chính thức)",
      "Tải từ các liên kết quảng cáo nhấp nháy trên các trang web chia sẻ phim lậu",
      "Tắt toàn bộ phần mềm diệt virus trước khi bấm cài đặt",
      "Chọn tệp tin có dung lượng lớn nhất mà không cần đọc tên tệp"
    ],
    "answer": 0,
    "explain": "Luôn tải từ nguồn chính thống của cộng đồng dự án để tránh việc kẻ xấu chèn mã độc vào gói cài đặt nguồn mở rồi phát tán mạo danh."
  },
  {
    "id": "b3-16",
    "q": "Phần mềm nào sau đây là hệ quản trị cơ sở dữ liệu quan hệ mã nguồn mở rất phổ biến?",
    "options": [
      "MySQL",
      "Microsoft Access",
      "Oracle Database Enterprise",
      "Microsoft SQL Server"
    ],
    "answer": 0,
    "explain": "MySQL và MariaDB, PostgreSQL là các hệ quản trị CSDL quan hệ nguồn mở mạnh mẽ và phổ biến nhất trên Internet."
  },
  {
    "id": "b3-17",
    "q": "Hạn chế lớn nhất của việc lưu trữ tài liệu hoàn toàn cục bộ trên một ổ đĩa USB là:",
    "options": [
      "Dễ bị mất dữ liệu khi USB bị thất lạc, hỏng phần cứng hoặc nhiễm virus lây lan",
      "Không thể mở được tệp nếu không có đường truyền Internet",
      "Dung lượng lưu trữ trên USB luôn đắt hơn mua dung lượng đám mây",
      "USB không thể cắm vào máy tính để bàn"
    ],
    "answer": 0,
    "explain": "Lưu trữ chỉ trên một thiết bị vật lý như USB rất rủi ro: nếu đánh rơi, bị ngấm nước hoặc hỏng chip nhớ thì dữ liệu sẽ mất vĩnh viễn."
  },
  {
    "id": "b3-18",
    "q": "Mô hình dịch vụ 'SaaS' trong điện toán đám mây là viết tắt của cụm từ nào?",
    "options": [
      "Software as a Service (Phần mềm như một dịch vụ)",
      "Storage and System (Lưu trữ và hệ thống)",
      "Speed and Security (Tốc độ và bảo mật)",
      "Standard Application Software (Phần mềm ứng dụng chuẩn)"
    ],
    "answer": 0,
    "explain": "SaaS (Software as a Service) là mô hình phân phối dịch vụ trong đó ứng dụng được lưu trữ trên máy chủ đám mây và người dùng truy cập qua web."
  },
  {
    "id": "b3-19",
    "q": "Khi một nhóm học sinh làm bài tập dự án Tin học bằng Google Slides trực tuyến, ưu điểm rõ nhất là:",
    "options": [
      "Cả nhóm có thể cùng phân công mỗi bạn làm một trang slide đồng thời và xem được tiến độ của nhau",
      "Các bạn không cần dùng máy tính mà slide tự hoàn thành",
      "Bài trình chiếu sẽ tự động đạt điểm 10 mà không cần giáo viên chấm",
      "Bài tập sẽ được in ra giấy tự động mà không cần máy in"
    ],
    "answer": 0,
    "explain": "Tính năng đồng bộ tức thời của Google Slides giúp các thành viên cùng làm bài tập nhóm hiệu quả mà không phải gửi qua lại từng tệp tốn công."
  },
  {
    "id": "b3-20",
    "q": "Tổ chức nào sau đây là tổ chức phi lợi nhuận nổi tiếng khởi xướng phong trào phần mềm tự do (Free Software Foundation)?",
    "options": [
      "FSF (do Richard Stallman thành lập)",
      "Microsoft Corporation",
      "Apple Inc.",
      "Intel Corporation"
    ],
    "answer": 0,
    "explain": "Free Software Foundation (FSF) do Richard Stallman sáng lập năm 1985 đã đặt nền móng lý thuyết và các giấy phép tự do (GNU GPL) cho phần mềm nguồn mở."
  },
  {
    "id": "b3-21",
    "q": "Tại sao nhiều công ty công nghệ lớn vẫn đầu tư tài chính cho các dự án nguồn mở?",
    "options": [
      "Họ cùng hưởng lợi từ sự đóng góp của cộng đồng, xây dựng tiêu chuẩn chung và phát triển hệ sinh thái dịch vụ đi kèm",
      "Vì luật pháp quốc tế bắt buộc tất cả các công ty phải tặng hết mã nguồn",
      "Vì các công ty đó không còn lập trình viên nào làm việc",
      "Để phá hủy thị trường máy tính cá nhân"
    ],
    "answer": 0,
    "explain": "Mã nguồn mở giúp giảm chi phí R&D, tạo dựng hệ sinh thái lớn (ví dụ Google đầu tư Android/Kubernetes, IBM hỗ trợ Linux, Microsoft đóng góp cho GitHub)."
  },
  {
    "id": "b3-22",
    "q": "Khi chia sẻ một liên kết tài liệu Google Docs cho bạn bè, tùy chọn quyền nào cho phép bạn chỉ đọc nội dung mà không được phép sửa đổi?",
    "options": [
      "Người xem (Viewer)",
      "Người nhận xét (Commenter)",
      "Người chỉnh sửa (Editor)",
      "Chủ sở hữu (Owner)"
    ],
    "answer": 0,
    "explain": "Quyền Viewer (Người xem) chỉ cho phép đọc và tải xuống tài liệu, ngăn chặn người khác vô tình hay cố ý làm sai lệch nội dung."
  },
  {
    "id": "b3-23",
    "q": "Thuật ngữ 'Mã nguồn' (Source Code) của một phần mềm được hiểu là:",
    "options": [
      "Tập hợp các câu lệnh do lập trình viên viết bằng một ngôn ngữ lập trình trước khi biên dịch thành mã máy",
      "Tên của người sáng lập ra công ty sản xuất máy tính",
      "Bản hợp đồng mua bán linh kiện điện tử",
      "Mật khẩu mở khóa màn hình máy tính"
    ],
    "answer": 0,
    "explain": "Mã nguồn là các tệp văn bản chứa câu lệnh lập trình (C, Java, Python...) thể hiện toàn bộ thuật toán và kiến trúc hoạt động của phần mềm."
  },
  {
    "id": "b3-24",
    "q": "Xu hướng chuyển dịch từ phần mềm cài đặt truyền thống sang phần mềm chạy trên Internet đem lại lợi ích lớn nhất cho người dùng là:",
    "options": [
      "Không lo lắng về việc cài đặt, cập nhật phiên bản vá lỗi và khả năng làm việc liền mạch trên đa thiết bị",
      "Máy tính không cần dùng pin hay dây nguồn vẫn chạy được",
      "Không bao giờ bị hỏng màn hình máy tính",
      "Tốc độ gõ phím của người dùng tăng lên gấp ba lần"
    ],
    "answer": 0,
    "explain": "Nhà cung cấp đám mây tự động bảo trì và nâng cấp phần mềm; người dùng mở máy tính, máy tính bảng hay điện thoại đều có dữ liệu đồng bộ tức thì."
  }
];
