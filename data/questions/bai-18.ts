import { Question } from "@/lib/types";

// Bài 18: Xác định cấu trúc bảng và các trường khóa
export const questions: Question[] = [
  {
    "id": "b18-01",
    "q": "Trong bài toán quản lý âm nhạc (CSDL mymusic), thực thể nào sau đây đại diện cho người sáng tác các bài hát?",
    "options": [
      "Bảng nhacsi (Nhạc sĩ)",
      "Bảng casi (Ca sĩ)",
      "Bảng theloai (Thể loại)",
      "Bảng bannhac (Bản nhạc)"
    ],
    "answer": 0,
    "explain": "Thực thể nhacsi lưu trữ thông tin về các tác giả sáng tác ra các bản nhạc."
  },
  {
    "id": "b18-02",
    "q": "Cấu trúc thiết kế tối thiểu của bảng `casi` để quản lý thông tin ca sĩ gồm các trường nào?",
    "options": [
      "idCasi (Khóa chính) và tenCasi (Tên ca sĩ)",
      "idBannhac và tenNhacsi",
      "idTheloai và diaChiNha",
      "soDienThoai và soTienLuong"
    ],
    "answer": 0,
    "explain": "Bảng casi gồm khóa chính idCasi (kiểu số nguyên) và trường thuộc tính tenCasi (kiểu xâu ký tự)."
  },
  {
    "id": "b18-03",
    "q": "Trường `idCasi` trong bảng `casi` nên được chọn kiểu dữ liệu nào và mang vai trò gì?",
    "options": [
      "Kiểu INT (Số nguyên), đóng vai trò là Khóa chính (Primary Key)",
      "Kiểu DATE (Ngày tháng), đóng vai trò là Khóa ngoài",
      "Kiểu FLOAT (Số thực), không có vai trò gì",
      "Kiểu TEXT, dùng để viết lời bài hát"
    ],
    "answer": 0,
    "explain": "idCasi là mã định danh duy nhất cho mỗi ca sĩ, nên dùng kiểu số nguyên INT làm Khóa chính."
  },
  {
    "id": "b18-04",
    "q": "Thuộc tính `AUTO_INCREMENT` (Tự động tăng) thường được áp dụng cho trường nào trong bảng?",
    "options": [
      "Trường Khóa chính kiểu số nguyên để hệ thống tự động sinh số thứ tự tăng dần mỗi khi thêm bản ghi mới",
      "Trường tên bài hát để tự động sáng tác lời",
      "Trường ngày sinh để tự động tăng tuổi mỗi ngày",
      "Trường ảnh đại diện để tự động vẽ tranh"
    ],
    "answer": 0,
    "explain": "AUTO_INCREMENT tự sinh mã định danh (1, 2, 3...) tự động, người dùng không cần tự gõ mã số tránh bị trùng lặp."
  },
  {
    "id": "b18-05",
    "q": "Trong bảng `bannhac` gồm các trường (idBannhac, tenBannhac, idNhacsi, idTheloai), trường nào đóng vai trò là Khóa chính (Primary Key)?",
    "options": [
      "idBannhac",
      "tenBannhac",
      "idNhacsi",
      "idTheloai"
    ],
    "answer": 0,
    "explain": "idBannhac là mã định danh duy nhất cho từng bản nhạc trong CSDL."
  },
  {
    "id": "b18-06",
    "q": "Trong bảng `bannhac` ở câu trên, trường `idNhacsi` đóng vai trò là:",
    "options": [
      "Khóa ngoài (Foreign Key) tham chiếu đến trường idNhacsi trong bảng nhacsi",
      "Khóa chính của bảng bannhac",
      "Tên bài hát",
      "Một trường dữ liệu ghi chú không quan trọng"
    ],
    "answer": 0,
    "explain": "idNhacsi là khóa ngoài liên kết bản nhạc với nhạc sĩ đã sáng tác ra bản nhạc đó."
  },
  {
    "id": "b18-07",
    "q": "Mối quan hệ giữa bảng `nhacsi` và bảng `bannhac` là mối quan hệ loại nào?",
    "options": [
      "Mối quan hệ Một - Nhiều (1 - N): Một nhạc sĩ có thể sáng tác nhiều bản nhạc",
      "Mối quan hệ Một - Một (1 - 1)",
      "Mối quan hệ Nhiều - Nhiều (N - N)",
      "Không có mối liên hệ nào"
    ],
    "answer": 0,
    "explain": "Một nhạc sĩ (phía 1) sáng tác nhiều bản nhạc (phía N); mỗi bản nhạc do một tác giả sáng tác."
  },
  {
    "id": "b18-08",
    "q": "Mối quan hệ giữa bản nhạc và ca sĩ biểu diễn trong thực tế (một bản nhạc có thể do nhiều ca sĩ hát, một ca sĩ có thể hát nhiều bản nhạc) là mối quan hệ gì?",
    "options": [
      "Mối quan hệ Nhiều - Nhiều (N - N)",
      "Mối quan hệ Một - Một (1 - 1)",
      "Mối quan hệ Một - Nhiều (1 - N)",
      "Mối quan hệ Không - Không (0 - 0)"
    ],
    "answer": 0,
    "explain": "Đây là mối quan hệ N - N điển hình giữa ca sĩ và bài hát, đòi hỏi bảng trung gian liên kết."
  },
  {
    "id": "b18-09",
    "q": "Để thể hiện mối quan hệ Nhiều - Nhiều giữa bản nhạc và ca sĩ, ta cần tạo thêm bảng trung gian nào?",
    "options": [
      "Bảng banthuam (Bản thu âm) chứa cặp khóa ngoài idBannhac và idCasi",
      "Bảng nhacsi",
      "Bảng theloai",
      "Không cần tạo bảng nào"
    ],
    "answer": 0,
    "explain": "Bảng trung gian banthuam lưu thông tin mỗi lần ca sĩ thu âm một bản nhạc, biến N-N thành hai quan hệ 1-N."
  },
  {
    "id": "b18-10",
    "q": "Kiểu dữ liệu nào trong MySQL là thích hợp nhất cho trường `tenBannhac`?",
    "options": [
      "VARCHAR(255)",
      "INT",
      "DATE",
      "BOOLEAN"
    ],
    "answer": 0,
    "explain": "Tên bản nhạc là xâu ký tự có độ dài biến đổi, dùng kiểu VARCHAR với độ dài tối đa 255 ký tự là chuẩn mực."
  },
  {
    "id": "b18-11",
    "q": "Ràng buộc `NOT NULL` khi khai báo một cột dữ liệu trong bảng có ý nghĩa gì?",
    "options": [
      "Bắt buộc người dùng phải nhập giá trị cho cột đó, không được phép bỏ trống",
      "Cột đó bắt buộc phải bằng số 0",
      "Cột đó chỉ được phép nhập chữ cái tiếng Anh",
      "Cột đó không bao giờ được phép sửa đổi"
    ],
    "answer": 0,
    "explain": "NOT NULL bắt buộc trường đó phải có dữ liệu (ví dụ tên ca sĩ không được phép để trống)."
  },
  {
    "id": "b18-12",
    "q": "Ràng buộc `UNIQUE` (Duy nhất) trên một cột dữ liệu đảm bảo điều gì?",
    "options": [
      "Giá trị trong cột đó không được phép trùng lặp giữa các hàng trong bảng",
      "Giá trị trong cột đó bắt buộc phải là số chẵn",
      "Cột đó chỉ chứa duy nhất một hàng dữ liệu",
      "Cột đó chỉ hiển thị được vào ban ngày"
    ],
    "answer": 0,
    "explain": "UNIQUE cấm trùng lặp giá trị (ví dụ cột số CCCD hoặc mã định danh duy nhất)."
  },
  {
    "id": "b18-13",
    "q": "Sự khác biệt cơ bản giữa ràng buộc `PRIMARY KEY` và ràng buộc `UNIQUE` là gì?",
    "options": [
      "Một bảng chỉ có duy nhất 1 PRIMARY KEY và không được chứa NULL; trong khi bảng có thể có nhiều cột UNIQUE và UNIQUE có thể chứa giá trị NULL",
      "PRIMARY KEY chỉ áp dụng cho chữ cái, còn UNIQUE chỉ áp dụng cho số",
      "PRIMARY KEY là khóa ngoài, còn UNIQUE là khóa chính",
      "Hai ràng buộc này hoàn toàn giống hệt nhau không có gì khác"
    ],
    "answer": 0,
    "explain": "Mỗi bảng chỉ có 1 khóa chính (cấm NULL), nhưng có thể có nhiều chỉ mục UNIQUE (cho phép NULL)."
  },
  {
    "id": "b18-14",
    "q": "Tại sao người thiết kế CSDL KHÔNG NÊN chọn trường `tenCasi` làm Khóa chính của bảng `casi`?",
    "options": [
      "Vì trong thực tế hoàn toàn có thể xảy ra trường hợp hai ca sĩ có nghệ danh trùng nhau, dẫn đến không thể phân biệt",
      "Vì tên ca sĩ quá dài máy tính không đọc được",
      "Vì chữ cái không thể dùng làm khóa trong CSDL",
      "Vì tên ca sĩ sẽ bị thay đổi sau mỗi bài hát"
    ],
    "answer": 0,
    "explain": "Nghệ danh có thể trùng nhau hoặc thay đổi; dùng mã số idCasi độc lập làm khóa chính nhân tạo (Surrogate Key) là chuẩn thiết kế tối ưu."
  },
  {
    "id": "b18-15",
    "q": "Khái niệm 'Khóa nhân tạo' (Surrogate Key) trong thiết kế CSDL là gì?",
    "options": [
      "Một khóa chính kiểu số tự động tăng (ID) được tạo thêm vào bảng nhằm mục đích định danh kỹ thuật, không mang ý nghĩa nghiệp vụ thực tế",
      "Một chiếc khóa bằng kim loại nhân tạo",
      "Khóa chính do robot trí tuệ nhân tạo tự gõ vào",
      "Khóa chỉ dùng được trong môi trường giả lập"
    ],
    "answer": 0,
    "explain": "Surrogate Key (như idCasi, idBannhac) là mã số tự sinh ngắn gọn, tốc độ tìm kiếm index siêu nhanh và độc lập với thông tin đời thực."
  },
  {
    "id": "b18-16",
    "q": "Trong bảng `theloai` gồm các trường (idTheloai, tenTheloai), các ví dụ về giá trị hợp lệ của trường `tenTheloai` là:",
    "options": [
      "'Nhạc trẻ', 'Dân ca', 'Nhạc đỏ', 'Nhạc trữ tình'",
      "'Nguyễn Văn A', 'Trần Thị B'",
      "'12/05/2008', '20/11/2007'",
      "'Hà Nội', 'Cao Bằng', 'Đà Nẵng'"
    ],
    "answer": 0,
    "explain": "Thể loại âm nhạc phân loại dòng nhạc (Pop, Rock, Ballad, Dân ca...)."
  },
  {
    "id": "b18-17",
    "q": "Khi một bản nhạc thuộc về một thể loại nhạc cụ thể, trường khóa ngoài nào sẽ xuất hiện trong bảng `bannhac`?",
    "options": [
      "idTheloai (tham chiếu đến bảng theloai)",
      "tenTheloai",
      "idCasi",
      "diaChi"
    ],
    "answer": 0,
    "explain": "Đưa khóa chính idTheloai của bảng theloai sang bảng bannhac làm khóa ngoài để tạo liên kết."
  },
  {
    "id": "b18-18",
    "q": "Sơ đồ quan hệ thực thể (ERD - Entity Relationship Diagram) có tác dụng gì trong giai đoạn thiết kế CSDL?",
    "options": [
      "Trực quan hóa các thực thể, các thuộc tính và các mối quan hệ liên kết (1-1, 1-N, N-N) giữa các thực thể trước khi tạo bảng",
      "Đo tốc độ dòng điện chạy trong bo mạch chủ",
      "Tự động in lời bài hát ra giấy",
      "Vẽ tranh chân dung các nhạc sĩ"
    ],
    "answer": 0,
    "explain": "Sơ đồ ERD là bản thiết kế kiến trúc trực quan giúp kiểm tra tính logic và toàn vẹn của mô hình CSDL trước khi gõ lệnh tạo bảng."
  },
  {
    "id": "b18-19",
    "q": "Khi hai bảng được liên kết với nhau qua cặp Khóa chính - Khóa ngoài, điều kiện bắt buộc về mặt kiểu dữ liệu là:",
    "options": [
      "Cả hai trường phải có kiểu dữ liệu tương thích hoàn toàn (cùng là INT hoặc cùng độ dài ký tự)",
      "Khóa chính phải là kiểu ngày tháng, khóa ngoài phải là kiểu số",
      "Khóa ngoài phải có độ dài gấp đôi khóa chính",
      "Không có bất kỳ yêu cầu nào"
    ],
    "answer": 0,
    "explain": "Kiểu dữ liệu không tương thích (ví dụ bên INT, bên VARCHAR) sẽ bị hệ QTCSDL từ chối khi tạo ràng buộc Foreign Key."
  },
  {
    "id": "b18-20",
    "q": "Trường hợp nào sau đây là ví dụ về quan hệ Một - Một (1 - 1)?",
    "options": [
      "Mỗi công dân Việt Nam có duy nhất một số Căn cước công dân gắn chíp và mỗi số CCCD chỉ thuộc về duy nhất một công dân",
      "Một ca sĩ hát nhiều bài hát",
      "Một nhạc sĩ sáng tác nhiều bài hát",
      "Một trường học có nhiều lớp học"
    ],
    "answer": 0,
    "explain": "Quan hệ 1-1 là quan hệ song ánh tương ứng duy nhất giữa hai thực thể."
  },
  {
    "id": "b18-21",
    "q": "Tại sao không nên gộp chung tất cả thông tin về Ca sĩ, Nhạc sĩ, Thể loại và Bản nhạc vào trong duy nhất một bảng lớn?",
    "options": [
      "Vì sẽ gây ra hiện tượng dư thừa dữ liệu lặp đi lặp lại rất nhiều lần, tốn bộ nhớ và dễ sinh ra dị thường khi cập nhật",
      "Vì máy tính không thể hiển thị được bảng có nhiều hơn 3 cột",
      "Vì làm như vậy bảng sẽ bị xóa tự động",
      "Vì luật pháp quốc tế cấm tạo bảng có trên 100 dòng"
    ],
    "answer": 0,
    "explain": "Gộp tất cả vào 1 bảng làm thông tin tác giả bị gõ lặp lại hàng trăm lần theo từng bài hát, gây lãng phí và mất nhất quán."
  },
  {
    "id": "b18-22",
    "q": "Khi một nhạc sĩ đổi nghệ danh sáng tác, nếu cơ sở dữ liệu đã được thiết kế chuẩn hóa tách bảng `nhacsi` riêng, ta chỉ cần làm gì?",
    "options": [
      "Chỉ cần cập nhật duy nhất 1 lần tại trường tenNhacsi của bảng nhacsi, tất cả các bài hát liên quan đều tự động hiển thị tên mới",
      "Phải đi tìm và sửa lại hàng nghìn dòng trong tất cả các bài hát của nhạc sĩ đó",
      "Phải xóa bỏ toàn bộ CSDL và nhập lại từ đầu",
      "Phải đổi luôn tên của tất cả các ca sĩ"
    ],
    "answer": 0,
    "explain": "Đây chính là sức mạnh của mô hình quan hệ chuẩn hóa: sửa duy nhất một chỗ, thông tin được nhất quán toàn hệ thống."
  },
  {
    "id": "b18-23",
    "q": "Trong bảng `bannhac`, nếu một bài hát là 'Dân ca' khuyết danh chưa rõ tác giả sáng tác thì trường khóa ngoài `idNhacsi` có thể nhận giá trị gì?",
    "options": [
      "Giá trị NULL (hoặc một mã chỉ định quy ước cho tác giả Dân gian)",
      "Bắt buộc phải xóa bài hát đó đi",
      "Gõ tên người tìm thấy bài hát",
      "Không được phép lưu bài hát này vào máy tính"
    ],
    "answer": 0,
    "explain": "Khóa ngoài có thể nhận giá trị NULL nếu bài hát chưa xác định được tác giả mà không vi phạm toàn vẹn tham chiếu."
  },
  {
    "id": "b18-24",
    "q": "Mục tiêu cuối cùng của việc xác định cấu trúc bảng và các trường khóa trong CSDL mymusic là gì?",
    "options": [
      "Tạo ra một cấu trúc cơ sở dữ liệu khoa học, không dư thừa, dễ dàng truy vấn và bảo toàn tính toàn vẹn dữ liệu âm nhạc",
      "Để máy tính tự động phát ra các giai điệu âm nhạc",
      "Để bán bản quyền các bài hát lấy tiền",
      "Để thay thế các nhạc sĩ sáng tác bài hát"
    ],
    "answer": 0,
    "explain": "Mục tiêu của thiết kế là tổ chức dữ liệu chuẩn mực, logic, phục vụ tìm kiếm và quản lý bản quyền âm nhạc hiệu quả."
  }
];
