import { Question } from "@/lib/types";

// Bài 7: Thực hành tìm kiếm thông tin trên Internet
export const questions: Question[] = [
  {
    "id": "b7-01",
    "q": "Để tìm kiếm chính xác một cụm từ theo đúng thứ tự các từ trên máy tìm kiếm Google, ta đặt cụm từ đó trong ký hiệu nào?",
    "options": [
      "Cặp dấu ngoặc kép \" \"",
      "Cặp dấu ngoặc vuông [ ]",
      "Cặp dấu ngoặc nhọn { }",
      "Cặp dấu gạch chéo / /"
    ],
    "answer": 0,
    "explain": "Đặt trong cặp dấu ngoặc kép ép buộc công cụ tìm kiếm trả về các trang web chứa nguyên văn cụm từ đó theo đúng thứ tự."
  },
  {
    "id": "b7-02",
    "q": "Toán tử tìm kiếm nào sau đây giúp giới hạn kết quả tìm kiếm chỉ nằm trong một tên miền hoặc trang web cụ thể?",
    "options": [
      "site:",
      "filetype:",
      "intitle:",
      "define:"
    ],
    "answer": 0,
    "explain": "Cú pháp site:tenmien (ví dụ: 'tuyển sinh site:moet.gov.vn') chỉ tìm kiếm nội dung bên trong tên miền đó."
  },
  {
    "id": "b7-03",
    "q": "Để tìm kiếm các tài liệu bài giảng định dạng tệp PDF về môn Tin học 11, cú pháp tìm kiếm tối ưu nhất là:",
    "options": [
      "\"Tin học 11\" filetype:pdf",
      "Tin học 11 tải về máy tính ngay",
      "pdf Tin học 11 xem phim",
      "search: Tin học 11 dạng sách"
    ],
    "answer": 0,
    "explain": "Toán tử filetype:pdf lọc chính xác các tệp tin có phần mở rộng .pdf có chứa từ khóa 'Tin học 11'."
  },
  {
    "id": "b7-04",
    "q": "Toán tử dấu trừ (-) đặt sát liền trước một từ khóa trong ô tìm kiếm có ý nghĩa gì?",
    "options": [
      "Loại trừ các kết quả có chứa từ khóa đó khỏi kết quả tìm kiếm",
      "Tìm kiếm các bài viết về phép tính trừ trong toán học",
      "Gấp đôi số lượng kết quả tìm kiếm",
      "Dịch từ khóa đó sang tiếng nước ngoài"
    ],
    "answer": 0,
    "explain": "Ví dụ: 'báo đốm -xe' sẽ tìm kiếm thông tin về loài động vật báo đốm và loại bỏ các kết quả liên quan đến hãng xe hơi Jaguar."
  },
  {
    "id": "b7-05",
    "q": "Toán tử logic OR giữa hai từ khóa trên Google có tác dụng gì?",
    "options": [
      "Tìm kiếm các trang web chứa ít nhất một trong hai từ khóa đó",
      "Bắt buộc trang web phải chứa cả hai từ khóa đồng thời",
      "Xóa bỏ cả hai từ khóa khỏi bộ nhớ đệm",
      "Tắt kết nối mạng của máy tính"
    ],
    "answer": 0,
    "explain": "Từ khóa OR (viết hoa) mở rộng phạm vi tìm kiếm, chấp nhận kết quả có từ khóa thứ nhất hoặc từ khóa thứ hai hoặc cả hai."
  },
  {
    "id": "b7-06",
    "q": "Tiêu chí nào sau đây là quan trọng nhất để đánh giá độ tin cậy của một bài viết trên mạng Internet?",
    "options": [
      "Tác giả có chuyên môn rõ ràng, nguồn gốc từ cơ quan/tổ chức uy tín và thông tin có thể kiểm chứng chéo",
      "Trang web có nhiều hình ảnh hoạt hình bắt mắt và nhạc nền sôi động",
      "Bài viết được chia sẻ bởi một tài khoản nặc danh trên mạng xã hội",
      "Bài viết có tiêu đề giật gân, phóng đại và dùng nhiều dấu chấm than"
    ],
    "answer": 0,
    "explain": "Độ tin cậy của thông tin số phụ thuộc vào tính xác thực của tác giả, uy tín của tổ chức xuất bản và tính khách quan có nguồn dẫn chứng."
  },
  {
    "id": "b7-07",
    "q": "Trang web nào sau đây có đuôi tên miền thường thuộc về các cơ quan chính phủ của Việt Nam?",
    "options": [
      ".gov.vn",
      ".edu.vn",
      ".com.vn",
      ".org.vn"
    ],
    "answer": 0,
    "explain": "Tên miền .gov.vn (Government) là tên miền độc quyền dành riêng cho các cơ quan Đảng và Nhà nước Việt Nam."
  },
  {
    "id": "b7-08",
    "q": "Tên miền nào sau đây thường được cấp cho các trường học, viện nghiên cứu và tổ chức giáo dục tại Việt Nam?",
    "options": [
      ".edu.vn",
      ".net.vn",
      ".biz.vn",
      ".mil.vn"
    ],
    "answer": 0,
    "explain": "Đuôi .edu.vn (Education) dành riêng cho các đơn vị hoạt động trong lĩnh vực giáo dục và đào tạo."
  },
  {
    "id": "b7-09",
    "q": "Để tìm kiếm thông tin có từ khóa xuất hiện ngay trong phần tiêu đề của trang web, ta dùng toán tử nào?",
    "options": [
      "intitle:",
      "inurl:",
      "related:",
      "link:"
    ],
    "answer": 0,
    "explain": "Cú pháp intitle:tukhoa yêu cầu công cụ tìm kiếm lọc các trang mà tiêu đề (title tag) chứa đúng từ khóa đó."
  },
  {
    "id": "b7-10",
    "q": "Khi tìm kiếm hình ảnh trên Google Images, công cụ 'Công cụ' (Tools) cho phép người dùng lọc theo tiêu chí nào?",
    "options": [
      "Kích thước ảnh, màu sắc chủ đạo, loại ảnh (clipart, vẽ nét) và quyền sử dụng (bản quyền Creative Commons)",
      "Độ phân giải của màn hình người dùng",
      "Tốc độ gõ phím của người tìm kiếm",
      "Hãng sản xuất của chuột máy tính"
    ],
    "answer": 0,
    "explain": "Google Images cung cấp bộ lọc chuyên sâu về kích thước, màu sắc, thời gian đăng và giấy phép quyền sử dụng hình ảnh."
  },
  {
    "id": "b7-11",
    "q": "Hiện tượng 'Tin giả' (Fake news) trên không gian mạng thường có đặc điểm nhận dạng nào?",
    "options": [
      "Tiêu đề giật gân câu khách, không ghi rõ tác giả, không có nguồn dẫn chứng hoặc mạo danh cơ quan chức năng",
      "Được đăng trên Cổng thông tin điện tử của Bộ Giáo dục và Đào tạo",
      "Nội dung được các chuyên gia đầu ngành ký tên xác nhận",
      "Được phát sóng trong bản tin Thời sự đài truyền hình quốc gia"
    ],
    "answer": 0,
    "explain": "Tin giả thường đánh vào tâm lý tò mò hoặc hoang mang sợ hãi của người dùng, thiếu căn cứ kiểm chứng xác thực."
  },
  {
    "id": "b7-12",
    "q": "Để tra cứu nghĩa của một từ hoặc thuật ngữ chuyên ngành một cách nhanh nhất trên Google, em dùng cú pháp nào?",
    "options": [
      "define: <thuật ngữ>",
      "meaning: <thuật ngữ>",
      "translate: <thuật ngữ>",
      "find: <thuật ngữ>"
    ],
    "answer": 0,
    "explain": "Cú pháp define: (ví dụ define:algorithm) hiển thị trực tiếp định nghĩa từ điển chuẩn của thuật ngữ ở đầu trang kết quả."
  },
  {
    "id": "b7-13",
    "q": "Khi cần tìm tài liệu tham khảo cho bài thuyết trình môn Sinh học từ năm 2023 trở lại đây, người dùng nên sử dụng công cụ nào?",
    "options": [
      "Bộ lọc 'Thời gian' (Any time -> Mọi lúc / Năm qua / Khoảng thời gian tùy chỉnh) trong Google Tools",
      "Tắt kết nối mạng và bật lại",
      "Khởi động lại máy tính năm lần",
      "Gõ từ khóa kèm chữ 'mới nhất hôm nay'"
    ],
    "answer": 0,
    "explain": "Bộ lọc thời gian trong công cụ tìm kiếm giúp loại bỏ các bài viết cũ lỗi thời, chỉ giữ lại các kết quả mới cập nhật."
  },
  {
    "id": "b7-14",
    "q": "Toán tử dấu sao (*) trong chuỗi tìm kiếm trên Google đóng vai trò là:",
    "options": [
      "Ký tự đại diện (Wildcard) thay thế cho một hoặc nhiều từ chưa biết trong cụm từ",
      "Dấu nhân trong phép tính số học",
      "Ký hiệu làm nổi bật màu sắc trang web",
      "Lệnh xóa lịch sử trình duyệt web"
    ],
    "answer": 0,
    "explain": "Dấu * đóng vai trò đại diện cho từ còn thiếu, ví dụ: 'học * đi đôi với hành' sẽ tìm được các câu có từ còn thiếu ở giữa."
  },
  {
    "id": "b7-15",
    "q": "Hành vi nào sau đây thể hiện sự tôn trọng bản quyền khi sử dụng thông tin tìm kiếm từ Internet vào bài nghiên cứu của mình?",
    "options": [
      "Trích dẫn rõ ràng tên tác giả, tên bài viết, đường liên kết nguồn và ngày truy cập",
      "Sao chép nguyên văn toàn bộ bài viết của người khác và ghi tên mình là tác giả",
      "Chụp màn hình bài viết và xóa bỏ tên tác giả ban đầu",
      "Dịch bài viết của người khác sang tiếng Việt rồi nhận là của mình"
    ],
    "answer": 0,
    "explain": "Trích dẫn nguồn chuẩn mực là yêu cầu đạo đức và pháp lý bắt buộc trong học thuật và nghiên cứu."
  },
  {
    "id": "b7-16",
    "q": "Để tìm các trang web có nội dung tương tự hoặc có liên quan mật thiết với một trang web đã biết, ta dùng toán tử nào?",
    "options": [
      "related:",
      "link:",
      "cache:",
      "info:"
    ],
    "answer": 0,
    "explain": "Cú pháp related:website.com (ví dụ: related:tuoitre.vn) tìm kiếm các trang báo điện tử có chủ đề tương đồng."
  },
  {
    "id": "b7-17",
    "q": "Tại sao người dùng KHÔNG NÊN tin tưởng tuyệt đối vào kết quả đầu tiên xuất hiện trên Google nếu nó có gắn nhãn 'Được tài trợ' (Sponsored / Ad)?",
    "options": [
      "Vì đó là kết quả quảng cáo do doanh nghiệp trả tiền để hiển thị lên đầu, không nhất thiết là nguồn khách quan nhất",
      "Vì các liên kết đó đều chứa virus làm hỏng máy tính",
      "Vì Google cấm người dùng nhấp chuột vào liên kết quảng cáo",
      "Vì những trang web đó chỉ mở được vào ban ngày"
    ],
    "answer": 0,
    "explain": "Nhãn Sponsored/Ad là quảng cáo thương mại, nội dung có tính chất tiếp thị nên người học cần tỉnh táo phân biệt với kết quả tìm kiếm tự nhiên."
  },
  {
    "id": "b7-18",
    "q": "Khi tìm kiếm bằng hình ảnh (Google Lens / Reverse Image Search), người dùng tải một bức ảnh lên để làm gì?",
    "options": [
      "Tìm nguồn gốc bức ảnh, các bức ảnh tương tự hoặc thông tin về đồ vật, địa danh trong ảnh",
      "Tăng độ sáng của bức ảnh lên gấp đôi",
      "Xóa người trong bức ảnh tự động",
      "In bức ảnh ra khổ giấy A0"
    ],
    "answer": 0,
    "explain": "Tìm kiếm ảnh đảo ngược phân tích đặc trưng thị giác để truy tìm nguồn gốc bức ảnh gốc và thông tin liên quan trên mạng."
  },
  {
    "id": "b7-19",
    "q": "Trang web lưu trữ phiên bản cũ của các trang web trên toàn cầu phục vụ việc tra cứu lịch sử số có tên là:",
    "options": [
      "Wayback Machine (Internet Archive)",
      "Google Translate",
      "Wikipedia",
      "YouTube"
    ],
    "answer": 0,
    "explain": "Wayback Machine (archive.org) chụp lại các ảnh chụp trang web trong quá khứ, giúp kiểm chứng dữ liệu đã bị xóa hoặc sửa đổi."
  },
  {
    "id": "b7-20",
    "q": "Khi tra cứu thông tin khoa học chuyên sâu, công cụ tìm kiếm chuyên ngành nào của Google được học sinh và giới nghiên cứu sử dụng nhiều nhất?",
    "options": [
      "Google Scholar (scholar.google.com)",
      "Google Maps",
      "Google Shopping",
      "Google Play"
    ],
    "answer": 0,
    "explain": "Google Scholar lập chỉ mục các bài báo khoa học, luận văn, sách học thuật đã qua bình duyệt chuyên môn uy tín."
  },
  {
    "id": "b7-21",
    "q": "Nếu tìm kiếm với từ khóa quá dài và chi tiết như một đoạn văn đầy đủ, kết quả trả về thường sẽ:",
    "options": [
      "Có thể không tìm thấy kết quả phù hợp do yêu cầu quá nhiều từ khóa cùng lúc",
      "Chính xác tuyệt đối 100%",
      "Khiến máy tính bị quá tải bộ nhớ",
      "Làm tăng tốc độ đường truyền cáp quang"
    ],
    "answer": 0,
    "explain": "Nên cô đọng từ khóa thành các cụm danh từ trọng tâm thay vì dán nguyên một đoạn văn dài nhiều từ nối không cần thiết."
  },
  {
    "id": "b7-22",
    "q": "Giấy phép Creative Commons (CC) gắn trên các tài liệu tìm kiếm được trên mạng có ý nghĩa gì?",
    "options": [
      "Cho phép cộng đồng tái sử dụng tài liệu hợp pháp theo các điều kiện quy định sẵn (như ghi công tác giả, phi thương mại)",
      "Cấm tất cả mọi người không được phép đọc tài liệu",
      "Bắt buộc người xem phải trả tiền mặt qua bưu điện",
      "Khẳng định tài liệu đó do trí tuệ nhân tạo tự viết"
    ],
    "answer": 0,
    "explain": "Hệ thống giấy phép mở Creative Commons giúp tác giả cấp trước các quyền sử dụng tác phẩm cho cộng đồng một cách minh bạch."
  },
  {
    "id": "b7-23",
    "q": "Khi phát hiện một trang web đưa tin sai sự thật gây hoang mang dư luận trên mạng xã hội, hành động chuẩn mực của học sinh là gì?",
    "options": [
      "Không chia sẻ (share) bài viết, cảnh báo người thân và sử dụng chức năng báo cáo (Report) tin giả lên nền tảng",
      "Bấm chia sẻ ngay lên trang cá nhân của mình để câu lượt thích",
      "Kêu gọi bạn bè vào bình luận chửi bới xúc phạm tác giả",
      "In bài viết ra giấy phát cho cả trường"
    ],
    "answer": 0,
    "explain": "Không lan truyền tin giả và báo cáo vi phạm giúp thanh lọc môi trường thông tin số và tuân thủ Luật An ninh mạng."
  },
  {
    "id": "b7-24",
    "q": "Kỹ năng 'Xác thực chéo' (Cross-checking) khi tìm kiếm thông tin là gì?",
    "options": [
      "Đối chiếu một thông tin trên ít nhất 2-3 nguồn độc lập và có uy tín khác nhau trước khi kết luận",
      "Vẽ hai đường chéo lên màn hình máy tính",
      "Nhập từ khóa hai lần liên tiếp vào ô tìm kiếm",
      "Hỏi một người bạn cùng lớp xem bạn có thích thông tin đó không"
    ],
    "answer": 0,
    "explain": "Kiểm tra chéo là nguyên tắc cốt lõi của người sử dụng Internet thông thái để đảm bảo thông tin thu nhận là chính xác khách quan."
  }
];
