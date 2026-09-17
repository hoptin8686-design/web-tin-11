import { LessonExtra } from "@/lib/types";

// Bài 13: Cơ sở dữ liệu quan hệ (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b13-tf1",
      "context": "Khi thiết kế cơ sở dữ liệu cho một thư viện trường học, nhóm học sinh xây dựng hai bảng: Bảng BAN_DOC (MaThe, HoTen, NgaySinh, Lop) và Bảng SACH (MaSach, TenSach, TacGia, NamXB):",
      "statements": [
        {
          "text": "a) Trường MaThe có thể được chọn làm Khóa chính của bảng BAN_DOC vì giá trị của nó là duy nhất cho mỗi độc giả.",
          "answer": true,
          "explain": "Đúng. Mỗi bạn đọc có một mã thẻ duy nhất không bị trùng lặp."
        },
        {
          "text": "b) Khóa chính của một bảng được phép để giá trị trống (NULL) nếu học sinh đó chưa kịp nộp ảnh thẻ.",
          "answer": false,
          "explain": "Sai. Quy tắc toàn vẹn thực thể bắt buộc Khóa chính không bao giờ được phép mang giá trị NULL."
        },
        {
          "text": "c) Mối quan hệ giữa bạn đọc và sách là mối quan hệ Nhiều - Nhiều (N - N), vì một bạn đọc có thể mượn nhiều cuốn sách và một cuốn sách có thể được nhiều bạn đọc mượn qua các thời điểm.",
          "answer": true,
          "explain": "Đúng. Đây là quan hệ Nhiều - Nhiều thực tế."
        },
        {
          "text": "d) Để lưu trữ thông tin các lượt mượn trả, ta cần tạo thêm một bảng trung gian PHIEU_MUON chứa khóa ngoài tham chiếu đến MaThe và MaSach.",
          "answer": true,
          "explain": "Đúng. Bảng trung gian giải quyết quan hệ N - N thành hai quan hệ 1 - N chuẩn hóa."
        }
      ]
    },
    {
      "id": "b13-tf2",
      "context": "Về các đặc điểm và quy tắc trong cơ sở dữ liệu quan hệ:",
      "statements": [
        {
          "text": "a) Trong cùng một bảng quan hệ, không được phép có hai hàng có giá trị giống hệt nhau ở tất cả các cột.",
          "answer": true,
          "explain": "Đúng. Bảng quan hệ là một tập hợp các phần tử phân biệt, phải có khóa chính để phân biệt các hàng."
        },
        {
          "text": "b) Thứ tự sắp xếp các cột trong bảng làm thay đổi hoàn toàn ý nghĩa và bản chất dữ liệu của bảng đó.",
          "answer": false,
          "explain": "Sai. Trong mô hình quan hệ, thứ tự các cột không có ý nghĩa toán học; cột được nhận diện bằng tên trường chứ không bằng số thứ tự."
        },
        {
          "text": "c) Mỗi ô tại giao điểm của một hàng và một cột chỉ được chứa duy nhất một giá trị nguyên tố (không chứa một danh sách mảng giá trị).",
          "answer": true,
          "explain": "Đúng. Đây là điều kiện tiên quyết của Dạng chuẩn 1 (1NF)."
        },
        {
          "text": "d) Giá trị NULL trong cơ sở dữ liệu quan hệ có giá trị hoàn toàn bằng số 0 trong phép toán số học.",
          "answer": false,
          "explain": "Sai. NULL biểu thị trạng thái không có dữ liệu (chưa biết), không phải là số 0."
        }
      ]
    },
    {
      "id": "b13-tf3",
      "context": "Về khóa chính (Primary Key) và khóa ngoài (Foreign Key):",
      "statements": [
        {
          "text": "a) Một bảng quan hệ có thể có nhiều khóa ngoài tham chiếu tới nhiều bảng khác nhau.",
          "answer": true,
          "explain": "Đúng. Một bảng có thể có nhiều khóa ngoài để liên kết với nhiều bảng cha khác nhau."
        },
        {
          "text": "b) Khóa ngoài của một bảng bắt buộc phải có cùng kiểu dữ liệu với khóa chính của bảng được tham chiếu.",
          "answer": true,
          "explain": "Đúng. Kiểu dữ liệu phải tương thích hoàn toàn để hệ thống so khớp liên kết."
        },
        {
          "text": "c) Khóa chính chỉ có thể là một cột duy nhất, không bao giờ có thể kết hợp từ hai cột trở lên.",
          "answer": false,
          "explain": "Sai. Khóa chính có thể là Khóa tổng hợp (Composite Key) gồm từ 2 cột trở lên (ví dụ: MaLop + MaMon)."
        },
        {
          "text": "d) Quy tắc toàn vẹn tham chiếu đảm bảo không thể nhập một bản ghi vào bảng con nếu khóa ngoài trỏ tới một giá trị không tồn tại ở bảng cha.",
          "answer": true,
          "explain": "Đúng. Đây là nguyên tắc bảo vệ sự toàn vẹn của liên kết quan hệ."
        }
      ]
    },
    {
      "id": "b13-tf4",
      "context": "Về các thao tác cập nhật trên các bảng có liên kết khóa ngoài:",
      "statements": [
        {
          "text": "a) Khi xóa một hàng ở bảng cha, nếu chọn tùy chọn CASCADE thì hệ thống sẽ tự động xóa tất cả các hàng ở bảng con có liên kết tới hàng bị xóa.",
          "answer": true,
          "explain": "Đúng. Cơ chế CASCADE thực hiện xóa tầng liên hoàn an toàn."
        },
        {
          "text": "b) Tùy chọn RESTRICT ngăn cản thao tác xóa hàng ở bảng cha nếu hàng đó đang được tham chiếu bởi ít nhất một hàng ở bảng con.",
          "answer": true,
          "explain": "Đúng. RESTRICT chặn đứng thao tác xóa để bảo vệ dữ liệu phụ thuộc."
        },
        {
          "text": "c) Mô hình cơ sở dữ liệu quan hệ chỉ áp dụng được trên máy tính chạy hệ điều hành macOS.",
          "answer": false,
          "explain": "Sai. RDBMS hoạt động trên mọi hệ điều hành: Windows, Linux, macOS, Unix, Cloud..."
        },
        {
          "text": "d) Khái niệm 'Chuẩn hóa CSDL' giúp thiết kế các bảng tối ưu, hạn chế tối đa các dị thường thêm, sửa, xóa dữ liệu.",
          "answer": true,
          "explain": "Đúng. Chuẩn hóa là kỹ thuật thiết kế CSDL quan hệ nền tảng."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b13-es1",
      "q": "Trình bày các khái niệm cơ bản trong mô hình cơ sở dữ liệu quan hệ: Bảng (Table), Bản ghi (Record), Trường (Field), Khóa chính (Primary Key) và Khóa ngoài (Foreign Key).",
      "answer": "Các khái niệm cơ bản trong mô hình quan hệ:\n1. Bảng (Table / Relation): Cấu trúc dữ liệu dạng bảng 2 chiều gồm các hàng và cột dùng để lưu trữ thông tin về một tập hợp các đối tượng cùng loại trong thế giới thực (ví dụ bảng HỌC_SINH, bảng LỚP_HỌC).\n2. Bản ghi (Record / Row / Tuple): Mỗi hàng ngang trong bảng, chứa tập hợp các giá trị cụ thể mô tả trọn vẹn một cá thể thực thể (ví dụ: thông tin đầy đủ về học sinh Nguyễn Văn A).\n3. Trường (Field / Column / Attribute): Mỗi cột dọc trong bảng, thể hiện một thuộc tính đặc trưng của đối tượng (ví dụ: cột Ngày sinh, cột Điểm trung bình), tất cả các ô trong cùng một cột có cùng kiểu dữ liệu.\n4. Khóa chính (Primary Key - PK): Một cột hoặc tập hợp cột dùng để định danh duy nhất mỗi bản ghi trong bảng. Giá trị khóa chính bắt buộc phải duy nhất và không được phép để rỗng (NOT NULL).\n5. Khóa ngoài (Foreign Key - FK): Một cột (hoặc tập cột) trong một bảng đóng vai trò tham chiếu trực tiếp đến cột khóa chính của một bảng khác, dùng để thiết lập mối quan hệ liên kết dữ liệu giữa hai bảng."
    },
    {
      "id": "b13-es2",
      "q": "Thế nào là mối quan hệ Một - Nhiều (1 - N) và Nhiều - Nhiều (N - N) giữa các bảng trong CSDL quan hệ? Nêu cách giải quyết mối quan hệ Nhiều - Nhiều khi thiết kế cơ sở dữ liệu.",
      "answer": "1. Mối quan hệ Một - Nhiều (1 - N):\n- Khái niệm: Một bản ghi trong bảng A có thể liên kết với nhiều bản ghi trong bảng B, nhưng mỗi bản ghi trong bảng B chỉ liên kết với duy nhất một bản ghi trong bảng A.\n- Ví dụ: Một Lớp học có thể có nhiều Học sinh; nhưng mỗi Học sinh chỉ thuộc về đúng một Lớp học.\n\n2. Mối quan hệ Nhiều - Nhiều (N - N):\n- Khái niệm: Một bản ghi trong bảng A có thể liên kết với nhiều bản ghi trong bảng B, và ngược lại, một bản ghi trong bảng B cũng có thể liên kết với nhiều bản ghi trong bảng A.\n- Ví dụ: Một Học sinh có thể đăng ký nhiều Môn học; một Môn học có nhiều Học sinh theo học.\n\n3. Cách giải quyết mối quan hệ Nhiều - Nhiều (N - N):\n- Trong mô hình quan hệ chuẩn, không được thiết lập liên kết trực tiếp N - N giữa hai bảng vì sẽ gây dư thừa dữ liệu nghiêm trọng.\n- Cách xử lý: Tách mối quan hệ N - N thành hai mối quan hệ Một - Nhiều (1 - N) thông qua một bảng trung gian (bảng liên kết / Junction Table).\n- Ví dụ: Tạo bảng trung gian HOC_SINH_MON_HOC (Điểm thi) chứa 2 khóa ngoài: MaHS (trỏ về bảng HOC_SINH) và MaMH (trỏ về bảng MON_HOC), kết hợp thêm cột Điểm số."
    },
    {
      "id": "b13-es3",
      "q": "Quy tắc 'Toàn vẹn tham chiếu' (Referential Integrity) là gì? Giải thích ý nghĩa của hai tùy chọn 'CASCADE' và 'RESTRICT' khi xóa một bản ghi ở bảng cha.",
      "answer": "1. Khái niệm Toàn vẹn tham chiếu: Là ràng buộc logic giữa hai bảng có liên kết khóa ngoài, yêu cầu mọi giá trị của cột khóa ngoài ở bảng con bắt buộc phải tồn tại trong cột khóa chính của bảng cha tương ứng. Ràng buộc này đảm bảo không bao giờ sinh ra các bản ghi 'mồ côi' (dữ liệu con mất gốc).\n\n2. Ý nghĩa của hai tùy chọn khi xóa bản ghi ở bảng cha:\n- Tùy chọn RESTRICT (Hạn chế / Chặn đứng): Hệ quản trị CSDL sẽ kiểm tra trước khi xóa. Nếu bản ghi cha đang được tham chiếu bởi ít nhất một bản ghi con, hệ thống sẽ BÁO LỖI VÀ TỪ CHỐI THAO TÁC XÓA. Người dùng bắt buộc phải xóa hoặc chuyển các bản ghi con trước thì mới được xóa bản ghi cha. (Ví dụ: Cấm xóa mã lớp 11A1 nếu vẫn còn học sinh trong lớp đó).\n- Tùy chọn CASCADE (Xóa liên hoàn / Xóa tầng): Hệ thống cho phép xóa bản ghi cha, đồng thời TỰ ĐỘNG TÌM VÀ XÓA LUÔN TẤT CẢ CÁC BẢN GHI CON ở các bảng khác đang tham chiếu tới bản ghi cha đó để bảo toàn sự nhất quán. (Ví dụ: Khi xóa một Hóa đơn thì toàn bộ các dòng chi tiết hàng hóa trong hóa đơn đó ở bảng Chi tiết cũng tự động bị xóa theo)."
    },
    {
      "id": "b13-es4",
      "q": "Cho bài toán quản lý cửa hàng sách gồm hai thực thể: KHÁCH_HÀNG và HÓA_ĐƠN. Em hãy thiết kế cấu trúc hai bảng này, chỉ rõ Khóa chính, Khóa ngoài và mối quan hệ liên kết giữa chúng.",
      "answer": "Thiết kế cấu trúc hai bảng:\n1. Bảng KHACH_HANG (Khách hàng):\n- Các trường:\n  + MaKH (Mã khách hàng - VARCHAR(10)) -> KHÓA CHÍNH (PK)\n  + HoTen (Họ và tên khách hàng - VARCHAR(50))\n  + SoDienThoai (Số điện thoại - VARCHAR(15))\n  + DiaChi (Địa chỉ - VARCHAR(100))\n\n2. Bảng HOA_DON (Hóa đơn mua sách):\n- Các trường:\n  + MaHD (Mã hóa đơn - VARCHAR(10)) -> KHÓA CHÍNH (PK)\n  + NgayLap (Ngày lập hóa đơn - DATE)\n  + MaKH (Mã khách hàng mua - VARCHAR(10)) -> KHÓA NGOÀI (FK)\n  + TongTien (Tổng số tiền thanh toán - DECIMAL(12,2))\n\n3. Mối quan hệ liên kết:\n- Mối quan hệ giữa KHACH_HANG và HOA_DON là mối quan hệ Một - Nhiều (1 - N): Một khách hàng có thể có nhiều hóa đơn mua hàng khác nhau qua các lần mua; mỗi hóa đơn chỉ thuộc về duy nhất một khách hàng.\n- Liên kết được thiết lập bằng trường khóa ngoài MaKH trong bảng HOA_DON tham chiếu trực tiếp đến trường khóa chính MaKH trong bảng KHACH_HANG."
    }
  ]
};
