import { Question } from "@/lib/types";

// Bài 10: Lưu trữ dữ liệu và khai thác thông tin phục vụ quản lí
export const questions: Question[] = [
  {
    "id": "b10-01",
    "q": "Trong thực tế đời sống, công tác quản lý của một tổ chức (như nhà trường, bệnh viện, doanh nghiệp) luôn gắn liền với hoạt động nào?",
    "options": [
      "Lưu trữ dữ liệu có cấu trúc và khai thác thông tin để phục vụ việc ra quyết định",
      "Mua sắm liên tục các thiết bị phần cứng mới hàng tuần",
      "Xóa sạch hồ sơ sau khi học sinh hoặc bệnh nhân ra về",
      "Chỉ sử dụng sổ tay giấy để ghi chép thủ công"
    ],
    "answer": 0,
    "explain": "Mọi hoạt động quản lý đều cần thu thập, lưu trữ thông tin về đối tượng quản lý và xử lý dữ liệu để lập kế hoạch, giám sát và ra quyết định."
  },
  {
    "id": "b10-02",
    "q": "Ba nhóm thao tác cơ bản đối với hồ sơ quản lý gồm những nhóm nào?",
    "options": [
      "Tạo lập hồ sơ, Cập nhật hồ sơ và Khai thác hồ sơ",
      "Vẽ tranh, Nghe nhạc và Xem phim hoạt hình",
      "Mua máy tính, Cài Windows và Tắt nguồn",
      "Quét virus, Dọn dẹp ổ đĩa và Bật Wi-Fi"
    ],
    "answer": 0,
    "explain": "Quy trình quản lý dữ liệu chuẩn gồm 3 bước: Tạo lập (khởi tạo cấu trúc và nhập dữ liệu), Cập nhật (thêm, sửa, xóa) và Khai thác (tìm kiếm, thống kê, báo cáo)."
  },
  {
    "id": "b10-03",
    "q": "Thao tác nào sau đây thuộc nhóm công việc 'Tạo lập hồ sơ'?",
    "options": [
      "Xác định cấu trúc hồ sơ (các trường thông tin), thu thập và nhập dữ liệu ban đầu",
      "Xóa tên một học sinh chuyển trường khỏi danh sách",
      "Tính điểm trung bình cuối học kỳ cho cả lớp",
      "In danh sách học sinh đạt danh hiệu học sinh giỏi"
    ],
    "answer": 0,
    "explain": "Tạo lập hồ sơ là giai đoạn đầu tiên: thiết kế các cột thuộc tính cần quản lý và nhập dữ liệu của các đối tượng ban đầu."
  },
  {
    "id": "b10-04",
    "q": "Nhóm thao tác 'Cập nhật hồ sơ' bao gồm những công việc cụ thể nào?",
    "options": [
      "Thêm hồ sơ mới, Chỉnh sửa thông tin bị sai sót và Xóa hồ sơ không còn sử dụng",
      "Sắp xếp danh sách theo thứ tự bảng chữ cái",
      "Tìm kiếm học sinh có điểm môn Tin học cao nhất lớp",
      "Lập biểu đồ hình quạt biểu diễn tỷ lệ xếp loại học lực"
    ],
    "answer": 0,
    "explain": "Cập nhật là duy trì sự chính xác của dữ liệu qua thời gian gồm 3 thao tác: Thêm mới (Insert), Sửa đổi (Update) và Xóa (Delete)."
  },
  {
    "id": "b10-05",
    "q": "Thao tác nào sau đây thuộc nhóm công việc 'Khai thác hồ sơ'?",
    "options": [
      "Tìm kiếm, Sắp xếp, Lọc dữ liệu và Lập báo cáo thống kê",
      "Sửa lại ngày sinh bị ghi sai của một học sinh",
      "Xóa bỏ hồ sơ của một cuốn sách đã bị thanh lý khỏi thư viện",
      "Tạo thêm một cột 'Số điện thoại' vào bảng danh sách"
    ],
    "answer": 0,
    "explain": "Khai thác hồ sơ là trích xuất các thông tin có ý nghĩa từ dữ liệu đã lưu để trả lời các câu hỏi quản lý và in báo cáo."
  },
  {
    "id": "b10-06",
    "q": "Hạn chế lớn nhất của phương thức quản lý bằng sổ sách giấy tờ thủ công truyền thống là gì?",
    "options": [
      "Chiếm nhiều không gian lưu trữ, dễ mục nát/hỏa hoạn, tìm kiếm và thống kê số liệu cực kỳ chậm chạp và dễ sai sót",
      "Không thể mang sổ sách đi lại trong phòng làm việc",
      "Mực viết bút bi quá đắt đỏ",
      "Ai cũng có thể đọc được chữ viết tay của nhau"
    ],
    "answer": 0,
    "explain": "Quản lý thủ công tốn diện tích, rủi ro hư hỏng vật lý cao và khi cần thống kê hàng ngàn hồ sơ thì mất rất nhiều ngày công."
  },
  {
    "id": "b10-07",
    "q": "Ứng dụng công nghệ thông tin trong công tác quản lý mang lại lợi ích cốt lõi nào?",
    "options": [
      "Lưu trữ lượng dữ liệu khổng lồ, tìm kiếm và thống kê thông tin tức thời, chính xác, tiết kiệm chi phí và hỗ trợ chia sẻ dữ liệu dễ dàng",
      "Thay thế hoàn toàn con người trong việc ra mọi quyết định quản trị",
      "Làm cho máy tính không bao giờ bị hỏng phần cứng",
      "Không bao giờ cần đến người nhập dữ liệu ban đầu"
    ],
    "answer": 0,
    "explain": "Máy tính tự động hóa quá trình tính toán, tra cứu dữ liệu hàng triệu bản ghi chỉ trong vài phần trăm giây với độ chính xác tuyệt đối."
  },
  {
    "id": "b10-08",
    "q": "Trong bài toán quản lý học sinh ở trường THPT, thông tin nào sau đây có tính chất ĐỊNH DANH DUY NHẤT để phân biệt hai học sinh trùng cả họ và tên?",
    "options": [
      "Mã số định danh học sinh (hoặc số CCCD)",
      "Họ và tên của học sinh",
      "Năm sinh của học sinh",
      "Quê quán của học sinh"
    ],
    "answer": 0,
    "explain": "Họ tên, ngày sinh, quê quán đều có thể trùng nhau; mã số học sinh (hoặc số định danh cá nhân) là thuộc tính duy nhất để nhận diện."
  },
  {
    "id": "b10-09",
    "q": "Khi một học sinh trong lớp chuyển trường sang tỉnh khác, người quản lý hồ sơ cần thực hiện thao tác cập nhật nào?",
    "options": [
      "Xóa hoặc chuyển trạng thái hồ sơ của học sinh đó sang danh sách chuyển đi",
      "Thêm mới một bản ghi hồ sơ học sinh",
      "Sửa điểm kiểm tra 15 phút của cả lớp",
      "In bảng tổng kết điểm học kỳ I"
    ],
    "answer": 0,
    "explain": "Xóa hoặc cập nhật trạng thái lưu trữ hồ sơ của đối tượng không còn thuộc diện quản lý hiện tại."
  },
  {
    "id": "b10-10",
    "q": "Thao tác sắp xếp danh sách điểm học sinh theo thứ tự giảm dần của điểm tổng kết thuộc nhóm thao tác nào?",
    "options": [
      "Khai thác hồ sơ",
      "Tạo lập hồ sơ",
      "Cập nhật hồ sơ",
      "Xóa hồ sơ"
    ],
    "answer": 0,
    "explain": "Sắp xếp dữ liệu theo tiêu chí là một thao tác khai thác thông tin nhằm phục vụ xét thi đua, khen thưởng."
  },
  {
    "id": "b10-11",
    "q": "Trong bài toán quản lý thư viện trường học, đối tượng nào sau đây là đối tượng quản lý chính?",
    "options": [
      "Sách, Độc giả (học sinh/giáo viên) và Phiếu mượn/trả sách",
      "Cái quạt trần trong phòng đọc",
      "Màu sơn tường của thư viện",
      "Đồng phục của nhân viên thư viện"
    ],
    "answer": 0,
    "explain": "Hệ thống quản lý thư viện tập trung quản trị thông tin về đầu sách, thẻ bạn đọc và nhật ký các lượt mượn trả."
  },
  {
    "id": "b10-12",
    "q": "Việc tính toán 'Điểm trung bình môn học' từ các con điểm kiểm tra thường xuyên và định kỳ là ví dụ về hoạt động nào?",
    "options": [
      "Xử lý dữ liệu thô để tạo ra thông tin tổng hợp có giá trị",
      "Tạo lập cấu trúc bảng dữ liệu mới",
      "Xóa bỏ dữ liệu cũ bị lỗi thời",
      "Sao lưu dữ liệu ra đĩa cứng di động"
    ],
    "answer": 0,
    "explain": "Điểm số là dữ liệu thành phần; qua công thức tính toán tạo ra thông tin điểm trung bình đánh giá kết quả học tập."
  },
  {
    "id": "b10-13",
    "q": "Tại một siêu thị, khi khách hàng thanh toán tại quầy thu ngân, hệ thống phần mềm quản lý bán hàng sẽ tự động thực hiện đồng thời các thao tác nào?",
    "options": [
      "In hóa đơn, trừ số lượng tồn kho của mặt hàng đã bán và ghi nhận doanh thu vào báo cáo tài chính",
      "Tắt hệ thống điện của siêu thị để tiết kiệm chi phí",
      "Xóa toàn bộ danh mục hàng hóa của siêu thị",
      "Tự động tăng giá của tất cả các mặt hàng khác lên gấp đôi"
    ],
    "answer": 0,
    "explain": "Hệ thống bán hàng tự động cập nhật kho hàng và doanh thu theo thời gian thực ngay khi hoàn tất giao dịch thanh toán."
  },
  {
    "id": "b10-14",
    "q": "Khi phát hiện điểm số của học sinh bị nhập nhầm từ 9.0 thành 0.9, nhân viên giáo vụ cần thực hiện thao tác nào?",
    "options": [
      "Sửa đổi (chỉnh sửa) dữ liệu của bản ghi tương ứng trong hồ sơ",
      "Xóa bỏ toàn bộ hồ sơ của học sinh đó",
      "Tạo một cơ sở dữ liệu mới hoàn toàn",
      "Bỏ qua không cần sửa vì không quan trọng"
    ],
    "answer": 0,
    "explain": "Sửa đổi dữ liệu sai sót là thao tác cập nhật thiết yếu nhằm bảo đảm tính chính xác và nhất quán của hồ sơ."
  },
  {
    "id": "b10-15",
    "q": "Báo cáo nào sau đây là ví dụ điển hình về kết quả của việc 'Khai thác hồ sơ' trong nhà trường?",
    "options": [
      "Biểu đồ thống kê tỷ lệ học sinh xếp loại Tốt, Khá, Đạt của từng khối lớp cuối năm học",
      "Tờ giấy trắng mới mua về chuẩn bị in",
      "Thẻ học sinh chưa dán ảnh và chưa ghi tên",
      "Hộp đựng hồ sơ bằng bìa cứng đặt trong tủ sắt"
    ],
    "answer": 0,
    "explain": "Báo cáo thống kê tổng hợp số liệu trực quan từ kho dữ liệu là sản phẩm đầu ra giá trị nhất của công tác khai thác thông tin."
  },
  {
    "id": "b10-16",
    "q": "Hành vi nào sau đây gây nguy cơ làm sai lệch và mất tính toàn vẹn của hồ sơ quản lý điện tử?",
    "options": [
      "Nhập trùng lặp nhiều bản ghi của cùng một người hoặc xóa nhầm bản ghi khi chưa kiểm tra kỹ",
      "Định kỳ sao lưu dữ liệu ra ổ cứng ngoài",
      "Phân quyền rõ ràng cho từng người sử dụng phần mềm",
      "Đặt mật khẩu mạnh cho tài khoản quản trị"
    ],
    "answer": 0,
    "explain": "Nhập liệu cẩu thả, trùng lặp hoặc xóa nhầm bản ghi phá vỡ tính chính xác và toàn vẹn của hệ thống quản lý."
  },
  {
    "id": "b10-17",
    "q": "Để tìm kiếm nhanh danh sách các học sinh có quê quán tại 'Cao Bằng' và sinh năm '2008', phần mềm quản lý sử dụng chức năng nào?",
    "options": [
      "Lọc dữ liệu kết hợp nhiều điều kiện (Multi-criteria Filter)",
      "Chức năng đổi màu chữ trên màn hình",
      "Chức năng kiểm tra chính tả tiếng Anh",
      "Chức năng nghe nhạc giải trí"
    ],
    "answer": 0,
    "explain": "Lọc đa điều kiện (Quê quán = 'Cao Bằng' AND Năm sinh = 2008) giúp trích xuất chính xác nhóm đối tượng cần quản lý."
  },
  {
    "id": "b10-18",
    "q": "Việc chuyển đổi từ phương thức quản lý bằng bảng tính Excel đơn lẻ sang Cơ sở dữ liệu chuyên nghiệp nhằm khắc phục nhược điểm nào của Excel?",
    "options": [
      "Dữ liệu bị trùng lặp, thiếu ràng buộc toàn vẹn và khó khăn khi nhiều người cùng truy cập cập nhật đồng thời",
      "Excel tính toán quá chậm trên các con số nhỏ",
      "Excel không vẽ được biểu đồ hình cột",
      "Excel chỉ chạy được trên điện thoại di động"
    ],
    "answer": 0,
    "explain": "Excel lưu tệp cục bộ dễ gây trùng lặp, không hỗ trợ tốt đa người dùng đồng thời và thiếu cơ chế bảo mật phân quyền chặt chẽ như CSDL."
  },
  {
    "id": "b10-19",
    "q": "Trong quản lý bệnh viện, thông tin về 'Nhóm máu' của bệnh nhân thuộc loại dữ liệu nào?",
    "options": [
      "Dữ liệu y tế quan trọng phục vụ cấp cứu và điều trị",
      "Dữ liệu dùng để tính tiền viện phí",
      "Dữ liệu giải trí cho bệnh nhân xem",
      "Dữ liệu không bao giờ cần lưu trữ"
    ],
    "answer": 0,
    "explain": "Thông tin y tế nhóm máu gắn liền với tính mạng người bệnh, đòi hỏi lưu trữ chính xác tuyệt đối và truy xuất tức thì."
  },
  {
    "id": "b10-20",
    "q": "Yêu cầu 'Dữ liệu phải phản ánh đúng thực tế khách quan tại thời điểm thu thập' thể hiện tiêu chí nào của dữ liệu quản lý?",
    "options": [
      "Tính chính xác",
      "Tính bí mật tuyệt đối",
      "Tính phức tạp",
      "Tính vô tận"
    ],
    "answer": 0,
    "explain": "Tính chính xác là yêu cầu số một của dữ liệu; dữ liệu sai lệch sẽ dẫn đến các quyết định quản lý sai lầm gây hậu quả nghiêm trọng."
  },
  {
    "id": "b10-21",
    "q": "Khi một học sinh mới chuyển đến trường nhập học vào giữa năm học, người quản lý hồ sơ sẽ thực hiện thao tác:",
    "options": [
      "Thêm mới một bản ghi hồ sơ học sinh vào hệ thống",
      "Xóa sạch cơ sở dữ liệu hiện tại để nhập lại từ đầu",
      "Đổi tên nhà trường",
      "In toàn bộ hồ sơ của các bạn khác ra giấy"
    ],
    "answer": 0,
    "explain": "Thêm mới bản ghi (Insert Record) là thao tác bổ sung đối tượng mới vào cơ sở dữ liệu đang quản lý."
  },
  {
    "id": "b10-22",
    "q": "Công đoạn 'Xác định cấu trúc hồ sơ' khi bắt đầu xây dựng phần mềm quản lý trường học đòi hỏi phải làm gì?",
    "options": [
      "Xác định các thông tin cần quản lý (Mã học sinh, Họ tên, Ngày sinh, Giới tính, Lớp, Điểm số...) và kiểu dữ liệu phù hợp",
      "Mua 100 chiếc bàn ghế mới cho phòng học",
      "Vẽ tranh cổ động dán trước cổng trường",
      "Lên danh sách các bài hát trong buổi chào cờ"
    ],
    "answer": 0,
    "explain": "Thiết kế cấu trúc hồ sơ là định nghĩa các trường dữ liệu, kiểu dữ liệu và ràng buộc logic cho đối tượng quản lý."
  },
  {
    "id": "b10-23",
    "q": "Hoạt động 'Thống kê số lượng sách mượn nhiều nhất trong tháng' của thủ thư thuộc nhóm công việc nào?",
    "options": [
      "Khai thác hồ sơ",
      "Tạo lập hồ sơ",
      "Sửa chữa hồ sơ",
      "Xóa hồ sơ"
    ],
    "answer": 0,
    "explain": "Thống kê tổng hợp số lượt mượn giúp thủ thư nắm bắt nhu cầu đọc để lên kế hoạch mua sắm bổ sung sách mới."
  },
  {
    "id": "b10-24",
    "q": "Một hệ thống thông tin quản lý thành công đem lại giá trị lớn nhất cho tổ chức là:",
    "options": [
      "Cung cấp thông tin kịp thời, chính xác giúp nhà quản lý đưa ra các quyết định điều hành hiệu quả",
      "Tốn thật nhiều tiền mua bản quyền phần mềm",
      "Làm cho tất cả nhân viên bị mất việc làm",
      "Ngăn chặn mọi người tiếp cận công nghệ"
    ],
    "answer": 0,
    "explain": "Mục tiêu tối thượng của quản lý dữ liệu và hệ thống thông tin là phục vụ việc ra quyết định đúng đắn, nhanh chóng và tối ưu."
  }
];
