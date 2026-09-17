import { LessonExtra } from "@/lib/types";

// Bài 18: Xác định cấu trúc bảng và các trường khóa (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b18-tf1",
      "context": "Trong quá trình phân tích và thiết kế cơ sở dữ liệu quản lý âm nhạc mymusic:",
      "statements": [
        {
          "text": "a) Bảng casi gồm trường idCasi làm Khóa chính và trường tenCasi lưu tên ca sĩ.",
          "answer": true,
          "explain": "Đúng. Đây là cấu trúc bảng chuẩn cho thực thể ca sĩ."
        },
        {
          "text": "b) Thuộc tính AUTO_INCREMENT giúp trường idCasi tự động tăng giá trị khi chèn thêm ca sĩ mới mà người dùng không cần nhập tay.",
          "answer": true,
          "explain": "Đúng. AUTO_INCREMENT tự sinh số định danh duy nhất."
        },
        {
          "text": "c) Mối quan hệ giữa bảng nhacsi và bảng bannhac là mối quan hệ Một - Nhiều (1 - N).",
          "answer": true,
          "explain": "Đúng. Một nhạc sĩ sáng tác nhiều bản nhạc."
        },
        {
          "text": "d) Ta nên gộp toàn bộ thông tin ca sĩ, nhạc sĩ, thể loại vào chung một bảng duy nhất để tiện quản lý.",
          "answer": false,
          "explain": "Sai. Gộp chung sẽ gây dư thừa dữ liệu cực kỳ lớn và vi phạm các dạng chuẩn thiết kế CSDL."
        }
      ]
    },
    {
      "id": "b18-tf2",
      "context": "Về việc xác định khóa chính và khóa ngoài trong CSDL mymusic:",
      "statements": [
        {
          "text": "a) Trong bảng bannhac, trường idBannhac là Khóa chính định danh duy nhất cho mỗi bài hát.",
          "answer": true,
          "explain": "Đúng. idBannhac phân biệt các bản nhạc khác nhau."
        },
        {
          "text": "b) Trường idNhacsi trong bảng bannhac đóng vai trò là Khóa ngoài tham chiếu đến Khóa chính idNhacsi của bảng nhacsi.",
          "answer": true,
          "explain": "Đúng. Đây là khóa ngoài thiết lập liên kết tác giả sáng tác."
        },
        {
          "text": "c) Kiểu dữ liệu của khóa ngoài idNhacsi trong bảng bannhac có thể là xâu ký tự (VARCHAR) trong khi khóa chính idNhacsi ở bảng nhacsi lại là số nguyên (INT).",
          "answer": false,
          "explain": "Sai. Khóa ngoài và khóa chính bắt buộc phải tương thích cùng kiểu dữ liệu (cùng là INT)."
        },
        {
          "text": "d) Ràng buộc NOT NULL trên trường tenBannhac đảm bảo không thể lưu một bài hát mà không có tên bài hát.",
          "answer": true,
          "explain": "Đúng. NOT NULL ngăn ngừa việc để trống tên bài hát."
        }
      ]
    },
    {
      "id": "b18-tf3",
      "context": "Về giải quyết mối quan hệ Nhiều - Nhiều giữa bản nhạc và ca sĩ:",
      "statements": [
        {
          "text": "a) Trong thực tế, một bản nhạc có thể do nhiều ca sĩ biểu diễn, và một ca sĩ có thể hát nhiều bản nhạc khác nhau.",
          "answer": true,
          "explain": "Đúng. Đây là mối quan hệ Nhiều - Nhiều (N - N) thực tế."
        },
        {
          "text": "b) Để lưu trữ thông tin các ca sĩ biểu diễn bài hát, ta cần tạo thêm bảng trung gian banthuam kết nối giữa bảng casi và bảng bannhac.",
          "answer": true,
          "explain": "Đúng. Bảng trung gian chuyển quan hệ N - N thành hai quan hệ 1 - N."
        },
        {
          "text": "c) Bảng trung gian banthuam sẽ chứa ít nhất hai khóa ngoài là idBannhac và idCasi.",
          "answer": true,
          "explain": "Đúng. Hai khóa ngoài này trỏ về hai bảng thực thể tương ứng."
        },
        {
          "text": "d) Mô hình quan hệ cho phép một ô trong bảng bannhac chứa danh sách tên của 100 ca sĩ khác nhau cách nhau bằng dấu phẩy.",
          "answer": false,
          "explain": "Sai. Điều này vi phạm Dạng chuẩn 1 (1NF) về tính nguyên tố của dữ liệu."
        }
      ]
    },
    {
      "id": "b18-tf4",
      "context": "Về lợi ích của việc thiết kế cơ sở dữ liệu mymusic chuẩn hóa:",
      "statements": [
        {
          "text": "a) Khi một nhạc sĩ thay đổi thông tin liên hệ, ta chỉ cần chỉnh sửa duy nhất tại một dòng trong bảng nhacsi.",
          "answer": true,
          "explain": "Đúng. Tính không dư thừa đảm bảo việc cập nhật dữ liệu nhanh gọn và nhất quán."
        },
        {
          "text": "b) Khóa nhân tạo (Surrogate Key) như idCasi kiểu số nguyên tự tăng giúp tối ưu hóa tốc độ tìm kiếm và lập chỉ mục của hệ thống.",
          "answer": true,
          "explain": "Đúng. Khóa số nguyên ngắn gọn có hiệu năng xử lý cao nhất."
        },
        {
          "text": "c) Thiết kế CSDL tốt giúp dễ dàng viết các câu lệnh truy vấn liên kết dữ liệu đa bảng bằng mệnh đề INNER JOIN.",
          "answer": true,
          "explain": "Đúng. Cấu trúc bảng chuẩn mực hỗ trợ truy vấn báo cáo linh hoạt."
        },
        {
          "text": "d) Việc xác định các trường khóa là thao tác tùy chọn không cần thiết khi làm việc với CSDL quan hệ.",
          "answer": false,
          "explain": "Sai. Khóa chính và khóa ngoài là linh hồn của mô hình quan hệ, không có khóa thì không thể thiết lập liên kết."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b18-es1",
      "q": "Phân tích bài toán quản lý âm nhạc mymusic: Hãy nêu các thực thể chính cần quản lý, xác định các trường thuộc tính cho từng bảng và chỉ rõ Khóa chính, Khóa ngoài của các bảng đó.",
      "answer": "Phân tích thiết kế CSDL mymusic:\n1. Bảng nhacsi (Quản lý nhạc sĩ):\n- Các trường: idNhacsi (INT, AUTO_INCREMENT) -> KHÓA CHÍNH (PK); tenNhacsi (VARCHAR(100), NOT NULL).\n- Ý nghĩa: Lưu danh mục các tác giả sáng tác bài hát.\n\n2. Bảng casi (Quản lý ca sĩ):\n- Các trường: idCasi (INT, AUTO_INCREMENT) -> KHÓA CHÍNH (PK); tenCasi (VARCHAR(100), NOT NULL).\n- Ý nghĩa: Lưu danh mục các nghệ sĩ biểu diễn bài hát.\n\n3. Bảng theloai (Quản lý thể loại âm nhạc):\n- Các trường: idTheloai (INT, AUTO_INCREMENT) -> KHÓA CHÍNH (PK); tenTheloai (VARCHAR(50), NOT NULL).\n- Ý nghĩa: Lưu các dòng nhạc (Dân ca, Nhạc trẻ, Trữ tình...).\n\n4. Bảng bannhac (Quản lý bản nhạc / bài hát):\n- Các trường:\n  + idBannhac (INT, AUTO_INCREMENT) -> KHÓA CHÍNH (PK)\n  + tenBannhac (VARCHAR(200), NOT NULL)\n  + idNhacsi (INT) -> KHÓA NGOÀI (FK) tham chiếu tới bảng nhacsi(idNhacsi)\n  + idTheloai (INT) -> KHÓA NGOÀI (FK) tham chiếu tới bảng theloai(idTheloai)\n- Ý nghĩa: Mỗi bài hát gắn với một tác giả sáng tác và thuộc về một thể loại nhạc cụ thể."
    },
    {
      "id": "b18-es2",
      "q": "Trong thực tế, một bản nhạc có thể do nhiều ca sĩ biểu diễn và một ca sĩ có thể hát nhiều bản nhạc khác nhau (quan hệ Nhiều - Nhiều). Hãy thiết kế bảng trung gian để giải quyết mối quan hệ này trong CSDL mymusic.",
      "answer": "Thiết kế bảng trung gian giải quyết quan hệ N - N giữa Bản nhạc và Ca sĩ:\n1. Tên bảng: banthuam (Bản thu âm) hoặc casi_bannhac.\n2. Cấu trúc các trường:\n- idBanthuam (INT, AUTO_INCREMENT) -> Khóa chính của bảng thu âm.\n- idBannhac (INT, NOT NULL) -> Khóa ngoài (FK) tham chiếu đến bannhac(idBannhac).\n- idCasi (INT, NOT NULL) -> Khóa ngoài (FK) tham chiếu đến casi(idCasi).\n- ngayThuAm (DATE, tùy chọn) -> Lưu ngày phát hành/thu âm bài hát.\n- thoiLuong (INT, tùy chọn) -> Thời lượng bản thu tính bằng giây.\n\n3. Lợi ích của thiết kế này:\n- Tách rời mối quan hệ N - N phức tạp thành hai mối quan hệ Một - Nhiều (1 - N): Một bản nhạc có nhiều bản thu âm; Một ca sĩ có nhiều bản thu âm.\n- Tuân thủ Dạng chuẩn 1 (1NF), dữ liệu không bị dư thừa và dễ dàng truy vấn danh sách tất cả các ca sĩ đã từng hát một bài hát cụ thể."
    },
    {
      "id": "b18-es3",
      "q": "Thuộc tính 'AUTO_INCREMENT' (Tự động tăng) trong MySQL có ý nghĩa gì? Vì sao việc sử dụng khóa nhân tạo (Surrogate Key) dạng số nguyên tự tăng lại là giải pháp tối ưu cho các bảng như casi hay nhacsi?",
      "answer": "1. Ý nghĩa của thuộc tính AUTO_INCREMENT: Khi gán thuộc tính này cho một cột khóa chính kiểu số nguyên, hệ quản trị MySQL sẽ tự động theo dõi giá trị lớn nhất hiện có và tự động cộng thêm 1 để gán cho bản ghi mới chèn vào. Người dùng và lập trình viên không cần nhập giá trị cho cột này, hệ thống đảm bảo 100% giá trị không bao giờ bị trùng lặp.\n\n2. Lý do sử dụng khóa nhân tạo dạng số tự tăng là giải pháp tối ưu:\n- Tránh nhầm lẫn do trùng nghệ danh: Trong thực tế đời thực, có thể có hai ca sĩ hoặc nhạc sĩ trùng tên nhau (hoặc nghệ danh thay đổi theo thời gian). Dùng ID số nguyên duy nhất giúp phân biệt chính xác cá thể độc lập.\n- Hiệu năng xử lý và lập chỉ mục vượt trội: Máy tính so sánh và đánh chỉ mục (Index) trên các con số nguyên (INT - 4 byte) nhanh hơn gấp nhiều lần so với so sánh các chuỗi văn bản dài (VARCHAR).\n- Tiết kiệm dung lượng cho các bảng liên kết: Khi bảng khác lấy làm khóa ngoài, việc lưu một con số nguyên (4 byte) chiếm rất ít dung lượng so với việc phải lưu lại cả chuỗi tên ca sĩ dài dằng dặc."
    },
    {
      "id": "b18-es4",
      "q": "Vẽ mô hình liên kết bằng lời (mô tả các liên kết quan hệ 1-N) giữa 4 bảng: nhacsi, theloai, bannhac và casi trong cơ sở dữ liệu mymusic.",
      "answer": "Mô tả các liên kết quan hệ logic giữa các bảng trong CSDL mymusic:\n1. Liên kết giữa bảng nhacsi và bảng bannhac (Quan hệ 1 - N):\n- Bảng cha: nhacsi (1) với khóa chính idNhacsi.\n- Bảng con: bannhac (N) với khóa ngoài idNhacsi.\n- Ý nghĩa: Một Nhạc sĩ có thể sáng tác nhiều Bản nhạc; mỗi Bản nhạc được liên kết với một Nhạc sĩ sáng tác.\n\n2. Liên kết giữa bảng theloai và bảng bannhac (Quan hệ 1 - N):\n- Bảng cha: theloai (1) với khóa chính idTheloai.\n- Bảng con: bannhac (N) với khóa ngoài idTheloai.\n- Ý nghĩa: Một Thể loại âm nhạc có thể bao gồm nhiều Bản nhạc; mỗi Bản nhạc thuộc về một Thể loại nhạc nhất định.\n\n3. Liên kết giữa bảng bannhac và bảng casi (thông qua bảng trung gian banthuam):\n- Bảng bannhac (1) liên kết với bảng banthuam (N) qua khóa ngoài idBannhac.\n- Bảng casi (1) liên kết với bảng banthuam (N) qua khóa ngoài idCasi.\n- Ý nghĩa: Bản thu âm là điểm giao thoa ghi nhận ca sĩ cụ thể biểu diễn bản nhạc cụ thể nào."
    }
  ]
};
