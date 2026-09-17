import { Question } from "@/lib/types";

// Bài 8: Thực hành nâng cao sử dụng thư điện tử và mạng xã hội
export const questions: Question[] = [
  {
    "id": "b8-01",
    "q": "Khi gửi thư điện tử (email) cho nhiều người, trường BCC (Blind Carbon Copy) có tác dụng gì?",
    "options": [
      "Gửi đồng thời một bản sao bức thư cho nhiều người nhưng ẩn danh sách địa chỉ email của họ với nhau",
      "Công khai toàn bộ danh sách địa chỉ email của tất cả người nhận",
      "Tự động xóa bức thư sau khi người nhận đọc xong 5 giây",
      "Chuyển tiếp bức thư đến đồn công an gần nhất"
    ],
    "answer": 0,
    "explain": "BCC gửi bản sao ẩn danh, bảo vệ quyền riêng tư địa chỉ email của người nhận, tránh tình trạng lộ thông tin cá nhân."
  },
  {
    "id": "b8-02",
    "q": "Điểm khác biệt giữa trường CC (Carbon Copy) và trường BCC trong thư điện tử là:",
    "options": [
      "Người nhận trong trường CC nhìn thấy email của nhau, còn người trong trường BCC không thấy danh sách những người khác cùng nhận BCC",
      "Trường CC chỉ gửi được hình ảnh, còn trường BCC chỉ gửi được văn bản",
      "Trường CC miễn phí, còn trường BCC bắt buộc phải trả tiền cước bưu điện",
      "Trường CC chỉ dùng vào ban ngày, còn BCC dùng vào ban đêm"
    ],
    "answer": 0,
    "explain": "CC là đồng gửi công khai (tất cả mọi người đều biết ai nhận thư), còn BCC là đồng gửi kín (bảo mật danh sách người nhận)."
  },
  {
    "id": "b8-03",
    "q": "Phần 'Chủ đề thư' (Subject) trong email nên được viết như thế nào để thể hiện sự chuyên nghiệp?",
    "options": [
      "Ngắn gọn, rõ ràng, tóm tắt chính xác mục đích của bức thư (Ví dụ: [11A1] - Nộp bài tập nhóm môn Tin học)",
      "Để trống hoàn toàn không cần viết gì",
      "Chỉ gõ duy nhất một dấu chấm hoặc dấu phẩy",
      "Viết hoa toàn bộ cả một đoạn văn dài kèm các từ ngữ giật gân"
    ],
    "answer": 0,
    "explain": "Tiêu đề thư rõ ràng giúp người nhận dễ dàng phân loại, tìm kiếm và ưu tiên mở thư công việc quan trọng."
  },
  {
    "id": "b8-04",
    "q": "Chữ ký thư điện tử (Email Signature) tự động thường chứa những thông tin gì ở cuối thư?",
    "options": [
      "Họ tên, chức vụ/lớp học, đơn vị công tác/trường học và thông tin liên hệ chuyên nghiệp",
      "Mật khẩu đăng nhập tài khoản ngân hàng của người gửi",
      "Danh sách toàn bộ các bài hát người gửi yêu thích",
      "Bản quét vân tay và căn cước công dân của cả gia đình"
    ],
    "answer": 0,
    "explain": "Chữ ký thư cung cấp thông tin liên hệ chuẩn mực, tạo sự tin cậy và phong thái làm việc chuyên nghiệp."
  },
  {
    "id": "b8-05",
    "q": "Tính năng 'Bộ lọc' (Filter) trong dịch vụ Gmail giúp người dùng thực hiện công việc gì?",
    "options": [
      "Tự động gắn nhãn, phân loại, đánh dấu sao hoặc chuyển tiếp các thư đáp ứng tiêu chí định sẵn (như người gửi, từ khóa)",
      "Tự động vẽ tranh biếm họa đính kèm vào thư",
      "Lọc nước uống cho nhân viên văn phòng",
      "Tăng dung lượng pin của điện thoại di động"
    ],
    "answer": 0,
    "explain": "Bộ lọc giúp tự động hóa quản lý hộp thư đến, gom các thư từ giáo viên hoặc bài tập lớp vào đúng nhãn chuyên biệt."
  },
  {
    "id": "b8-06",
    "q": "Khi gửi tệp đính kèm (Attachment) qua Gmail vượt quá giới hạn 25 MB, dịch vụ sẽ tự động xử lý thế nào?",
    "options": [
      "Tự động tải tệp đó lên Google Drive và chèn liên kết chia sẻ vào nội dung bức thư",
      "Hủy tài khoản Gmail của người gửi ngay lập tức",
      "Xóa bỏ hoàn toàn tệp tin đó khỏi máy tính",
      "Cắt nhỏ bức thư thành 100 bức thư khác nhau"
    ],
    "answer": 0,
    "explain": "Google tích hợp sâu Gmail với Google Drive: tệp >25MB sẽ tự chuyển thành liên kết Google Drive an toàn."
  },
  {
    "id": "b8-07",
    "q": "Thư rác (Spam Email) thường có đặc điểm nhận dạng nào sau đây?",
    "options": [
      "Được gửi hàng loạt từ địa chỉ lạ với nội dung quảng cáo mờ ám, thông báo trúng thưởng giả hoặc chứa liên kết độc hại",
      "Được gửi từ giáo viên chủ nhiệm thông báo lịch thi học kỳ",
      "Chứa thông báo điểm tổng kết của nhà trường",
      "Được gửi từ bố mẹ hỏi thăm sức khỏe"
    ],
    "answer": 0,
    "explain": "Thư rác gửi đại trà không được yêu cầu, thường chứa mồi nhử lừa đảo hoặc tệp đính kèm cài cắm mã độc."
  },
  {
    "id": "b8-08",
    "q": "Khái niệm 'Dấu chân kỹ thuật số' (Digital Footprint) trên mạng xã hội được hiểu là:",
    "options": [
      "Toàn bộ dấu vết thông tin, hình ảnh, bài đăng, bình luận mà người dùng để lại trong quá trình hoạt động trên không gian mạng",
      "Vết mực in ngón chân của người dùng trên bàn phím máy tính",
      "Kích thước của màn hình điện thoại đo bằng đơn vị inch",
      "Phần mềm dùng để đo quãng đường đi bộ hàng ngày"
    ],
    "answer": 0,
    "explain": "Dấu chân số là lịch sử hành vi trực tuyến của bạn, tồn tại lâu dài và có thể ảnh hưởng đến hình ảnh cá nhân và cơ hội nghề nghiệp tương lai."
  },
  {
    "id": "b8-09",
    "q": "Quy tắc ứng xử 'Netiquette' (Văn hóa mạng) khuyên người dùng KHÔNG NÊN làm điều gì khi giao tiếp trên mạng xã hội?",
    "options": [
      "Sử dụng ngôn từ tục tĩu, lăng mạ, bôi nhọ danh dự người khác hoặc viết hoa toàn bộ câu chữ như đang quát tháo",
      "Sử dụng lời chào lịch sự và xưng hô đúng mực",
      "Lắng nghe và tôn trọng quan điểm khác biệt của bạn bè",
      "Cảm ơn người đã giúp đỡ giải đáp thắc mắc cho mình"
    ],
    "answer": 0,
    "explain": "VIẾT HOA TOÀN BỘ TRONG THƯ TÍN ĐIỆN TỬ VÀ MẠNG XÃ HỘI ĐƯỢC COI LÀ HÀNH VI LA HÉT QUÁT THÁO VÔ LỊCH SỰ."
  },
  {
    "id": "b8-10",
    "q": "Hiện tượng 'Bắt nạt trên mạng' (Cyberbullying) là hành vi:",
    "options": [
      "Sử dụng công nghệ số để cố ý quấy rối, đe dọa, xúc phạm hoặc cô lập người khác trên không gian mạng",
      "Mời bạn bè cùng tham gia nhóm học tập trực tuyến",
      "Bấm nút thích bức ảnh kỷ yếu của lớp bạn",
      "Nhắn tin chúc mừng sinh nhật thầy cô giáo"
    ],
    "answer": 0,
    "explain": "Bắt nạt qua mạng là hành vi bạo lực tinh thần độc hại gây tổn thương tâm lý nghiêm trọng cho nạn nhân."
  },
  {
    "id": "b8-11",
    "q": "Chế độ riêng tư 'Chỉ mình tôi' (Only Me) trên mạng xã hội phù hợp cho mục đích nào?",
    "options": [
      "Lưu trữ bài viết, hình ảnh cá nhân mang tính nhật ký riêng tư mà không muốn ai khác nhìn thấy",
      "Phát sóng trực tiếp bán hàng cho cả triệu người xem",
      "Thông báo tuyển sinh cho toàn trường biết",
      "Chúc mừng ngày 20/11 tới tất cả thầy cô giáo"
    ],
    "answer": 0,
    "explain": "Only Me giúp ẩn hoàn toàn nội dung với bạn bè và người lạ, biến bài đăng thành kho lưu trữ riêng."
  },
  {
    "id": "b8-12",
    "q": "Hành vi nào sau đây giúp hạn chế nguy cơ bị rò rỉ dữ liệu riêng tư trên trang mạng xã hội cá nhân?",
    "options": [
      "Thiết lập quyền riêng tư bài viết ở chế độ Bạn bè, hạn chế công khai số điện thoại, địa chỉ nhà và số CCCD",
      "Công khai toàn bộ lịch trình di chuyển hàng ngày của gia đình lên trang chủ",
      "Chấp nhận kết bạn bừa bãi với tất cả người lạ không quen biết",
      "Đăng ảnh thẻ căn cước công dân và thẻ ngân hàng để khoe bạn bè"
    ],
    "answer": 0,
    "explain": "Kiểm soát đối tượng xem và không công khai thông tin định danh cá nhân là lá chắn bảo vệ tốt nhất trên mạng xã hội."
  },
  {
    "id": "b8-13",
    "q": "Khi nhận được một email thông báo: 'Bạn đã trúng thưởng 500 triệu đồng, hãy nhấp vào đường link và nhập mật khẩu ngân hàng để nhận tiền', em nên xử lý thế nào?",
    "options": [
      "Nhận diện đây là email lừa đảo (Phishing), tuyệt đối không bấm vào link và báo cáo thư rác (Report Spam)",
      "Bấm vào link và nhập đầy đủ thông tin tài khoản ngân hàng ngay",
      "Chuyển tiếp thư cho toàn bộ người thân để họ cùng nhận thưởng",
      "Đến ngân hàng đòi tiền ngay lập tức"
    ],
    "answer": 0,
    "explain": "Đây là chiêu trò tấn công phi kỹ thuật lừa đảo điển hình nhằm chiếm đoạt tài khoản ngân hàng."
  },
  {
    "id": "b8-14",
    "q": "Tính năng 'Gắn nhãn' (Labels) trong Gmail có chức năng tương tự như:",
    "options": [
      "Hệ thống các thư mục giúp phân loại và nhóm các thư có cùng chủ đề",
      "Phần mềm nén tệp zip trên máy tính",
      "Máy in màu văn bản",
      "Chức năng đổi màu vỏ màn hình máy tính"
    ],
    "answer": 0,
    "explain": "Nhãn giúp tổ chức hòm thư khoa học: một email có thể được gắn nhiều nhãn khác nhau (Bài tập, Học tập, Gia đình)."
  },
  {
    "id": "b8-15",
    "q": "Khi một học sinh bị kẻ xấu quấy rối hoặc bôi nhọ trên mạng xã hội, bạn đó NÊN làm gì đầu tiên?",
    "options": [
      "Chụp lại bằng chứng tin nhắn/bài viết, chặn (Block) kẻ quấy rối và báo cho cha mẹ, thầy cô hoặc cơ quan chức năng hỗ trợ",
      "Chửi bới trả đũa bằng những từ ngữ xúc phạm nặng nề hơn",
      "Im lặng chịu đựng một mình và bỏ học",
      "Gặp mặt kẻ quấy rối ở nơi vắng vẻ một mình để giải quyết"
    ],
    "answer": 0,
    "explain": "Lưu bằng chứng và báo người lớn tin cậy là phương án bảo vệ bản thân văn minh, an toàn và đúng pháp luật."
  },
  {
    "id": "b8-16",
    "q": "Thao tác 'Trả lời tất cả' (Reply All) trong email nên được dùng khi nào?",
    "options": [
      "Chỉ khi nội dung câu trả lời thực sự cần thiết và có ích cho TẤT CẢ những người có trong danh sách nhận thư ban đầu",
      "Trong mọi trường hợp kể cả chỉ muốn nói lời 'Cảm ơn' riêng với người gửi",
      "Khi muốn gửi thư rác quảng cáo cho nhiều người",
      "Khi muốn xóa toàn bộ danh bạ email"
    ],
    "answer": 0,
    "explain": "Lạm dụng Reply All với những câu trả lời ngắn không cần thiết sẽ gây phiền toái, làm ngập hòm thư của những người không liên quan."
  },
  {
    "id": "b8-17",
    "q": "Mạng xã hội thường sử dụng các thuật toán gợi ý (Recommendation Algorithm) nhằm mục đích chính là:",
    "options": [
      "Giữ chân người dùng ở lại ứng dụng càng lâu càng tốt bằng cách liên tục phân phối các nội dung phù hợp với sở thích",
      "Tự động tắt điện thoại của người dùng khi đến giờ đi ngủ",
      "Giúp học sinh tập trung học tập mà không bị phân tâm",
      "Tự động xóa các tài khoản không có ảnh đại diện"
    ],
    "answer": 0,
    "explain": "Thuật toán theo dõi thời gian xem, lượt tương tác để gợi ý video/bài viết tương tự nhằm tối đa hóa doanh thu quảng cáo."
  },
  {
    "id": "b8-18",
    "q": "Hiện tượng 'Bong bóng lọc' (Filter Bubble) trên mạng xã hội khiến người dùng có nguy cơ gì?",
    "options": [
      "Chỉ tiếp xúc với những thông tin củng cố quan điểm sẵn có của mình, dẫn đến cái nhìn phiến diện, thiếu khách quan về thế giới",
      "Làm màn hình điện thoại bị nổi bọt khí",
      "Làm mất kết nối Bluetooth với tai nghe",
      "Khiến bàn phím điện thoại bị loạn cảm ứng"
    ],
    "answer": 0,
    "explain": "Filter Bubble cô lập người dùng trong vòng lặp thông tin ưa thích, làm giảm khả năng tư duy phản biện đa chiều."
  },
  {
    "id": "b8-19",
    "q": "Khi viết thư điện tử gửi cho thầy cô giáo xin phép nghỉ học, yếu tố nào thể hiện sự kính trọng và phép lịch sự?",
    "options": [
      "Có lời chào kính gửi trang trọng, xưng hô rõ họ tên lớp học, lý do xin nghỉ rõ ràng và lời cảm ơn chân thành",
      "Dùng ngôn ngữ mạng teen-code viết tắt không dấu",
      "Chỉ gửi một biểu tượng cảm xúc mặt khóc mà không viết chữ nào",
      "Gửi thư vào lúc 2 giờ sáng với tiêu đề giật gân"
    ],
    "answer": 0,
    "explain": "Tuân thủ phép lịch sự tối thiểu trong thư điện tử học đường thể hiện văn hóa ứng xử của học sinh."
  },
  {
    "id": "b8-20",
    "q": "Để bảo vệ danh tính của các phụ huynh trong lớp khi giáo viên gửi bảng điểm học sinh qua email chung, giáo viên NÊN:",
    "options": [
      "Điền danh sách email của tất cả các phụ huynh vào trường BCC",
      "Điền toàn bộ email vào trường To hoặc CC",
      "Đăng công khai bảng điểm lên nhóm Facebook mở",
      "Gửi mật khẩu tài khoản email giáo viên cho phụ huynh"
    ],
    "answer": 0,
    "explain": "Dùng BCC giúp thông tin điểm số và email của từng gia đình không bị lộ cho các phụ huynh khác nhìn thấy."
  },
  {
    "id": "b8-21",
    "q": "Hành vi 'Đào mộ' (Doxing) thông tin cá nhân trên mạng xã hội là:",
    "options": [
      "Hành vi ác ý tìm kiếm và công khai các thông tin riêng tư, địa chỉ nhà, trường học của người khác lên mạng nhằm mục đích công kích",
      "Đào đất để trồng hoa trong công viên",
      "Hành vi sao lưu ảnh cũ vào thẻ nhớ",
      "Thao tác đổi ảnh đại diện cá nhân hàng tuần"
    ],
    "answer": 0,
    "explain": "Doxing là hành vi xâm phạm đời tư nghiêm trọng, có thể cấu thành tội vi phạm pháp luật hình sự về bảo vệ dữ liệu cá nhân."
  },
  {
    "id": "b8-22",
    "q": "Một nguyên tắc vàng giúp học sinh duy trì sức khỏe thể chất và tinh thần khi dùng mạng xã hội là:",
    "options": [
      "Cân bằng thời gian biểu, giới hạn thời gian lướt mạng dưới 1-2 tiếng mỗi ngày và không dùng thiết bị trước khi ngủ",
      "Cầm điện thoại liên tục 18 tiếng mỗi ngày kể cả khi đi ngủ",
      "Bỏ ăn cơm để xem video ngắn TikTok",
      "Không bao giờ gặp gỡ bạn bè người thân ngoài đời thực"
    ],
    "answer": 0,
    "explain": "Sử dụng mạng xã hội có chừng mực giúp phòng tránh hội chứng sợ bỏ lỡ (FOMO), trầm cảm và mất ngủ kéo dài."
  },
  {
    "id": "b8-23",
    "q": "Khi đăng ảnh chụp tập thể lớp lên mạng xã hội, hành động lịch sự và tôn trọng quyền riêng tư là:",
    "options": [
      "Hỏi ý kiến và được sự đồng thuận của các bạn xuất hiện trong ảnh trước khi đăng",
      "Tự ý gắn thẻ (tag) và đăng ảnh dìm hàng làm nhục bạn bè",
      "Cắt ghép mặt bạn bè vào những hình ảnh đồi trụy",
      "Đăng kèm số điện thoại riêng tư của các bạn lên bài viết"
    ],
    "answer": 0,
    "explain": "Tôn trọng quyền hình ảnh cá nhân của người khác là biểu hiện của công dân số có trách nhiệm."
  },
  {
    "id": "b8-24",
    "q": "Địa chỉ email hợp lệ theo chuẩn quốc tế có cấu trúc dạng nào sau đây?",
    "options": [
      "<tên_người_dùng>@<tên_miền> (ví dụ: nguyenvanan@gmail.com)",
      "<tên_người_dùng>#<tên_miền>",
      "www.nguyenvanan.com@email",
      "http://nguyenvanan.gmail.com"
    ],
    "answer": 0,
    "explain": "Địa chỉ email chuẩn gồm 2 phần ngăn cách bằng ký tự @ (username @ domain)."
  }
];
