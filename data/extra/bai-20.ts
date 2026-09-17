import { LessonExtra } from "@/lib/types";

// Bài 20: Thực hành tạo lập các bảng có khóa ngoài (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b20-tf1",
      "context": "Bạn Mai thực hành tạo bảng bannhac và thiết lập khóa ngoài trong CSDL mymusic bằng phần mềm HeidiSQL:",
      "statements": [
        {
          "text": "a) Bảng bannhac cần thiết lập trường idNhacsi làm khóa ngoài tham chiếu đến bảng nhacsi.",
          "answer": true,
          "explain": "Đúng. Đây là khóa ngoài liên kết tác giả sáng tác bản nhạc."
        },
        {
          "text": "b) Mai có thể tạo khóa ngoài trỏ đến một bảng chưa hề được tạo trong CSDL.",
          "answer": false,
          "explain": "Sai. Bảng cha bắt buộc phải tồn tại trước thì bảng con mới có thể tạo khóa ngoài tham chiếu tới."
        },
        {
          "text": "c) Cột khóa ngoài idNhacsi ở bảng bannhac bắt buộc phải có cùng kiểu dữ liệu với cột khóa chính idNhacsi ở bảng nhacsi.",
          "answer": true,
          "explain": "Đúng. Kiểu dữ liệu phải tương thích hoàn toàn (cùng là INT)."
        },
        {
          "text": "d) Thẻ 'Foreign keys' trong HeidiSQL là nơi chuyên dùng để tạo và cấu hình các ràng buộc khóa ngoài.",
          "answer": true,
          "explain": "Đúng. Giao diện trực quan cấu hình khóa ngoài của HeidiSQL."
        }
      ]
    },
    {
      "id": "b20-tf2",
      "context": "Về các hành vi toàn vẹn tham chiếu (ON DELETE và ON UPDATE) trong HeidiSQL:",
      "statements": [
        {
          "text": "a) Hành vi 'ON DELETE RESTRICT' sẽ ngăn cản việc xóa một nhạc sĩ nếu nhạc sĩ đó đang có bài hát trong bảng bannhac.",
          "answer": true,
          "explain": "Đúng. RESTRICT cấm xóa để bảo vệ tính toàn vẹn của các bài hát liên quan."
        },
        {
          "text": "b) Hành vi 'ON UPDATE CASCADE' giúp tự động cập nhật mã nhạc sĩ ở bảng bannhac khi mã nhạc sĩ ở bảng nhacsi thay đổi.",
          "answer": true,
          "explain": "Đúng. CASCADE lan truyền thay đổi mã khóa tự động."
        },
        {
          "text": "c) Mọi khóa ngoài đều bắt buộc phải xóa sạch toàn bộ hệ điều hành khi người dùng tắt máy.",
          "answer": false,
          "explain": "Sai. Khóa ngoài là ràng buộc dữ liệu logic, không ảnh hưởng đến hệ điều hành."
        },
        {
          "text": "d) Cho phép trường idNhacsi nhận giá trị NULL giúp CSDL lưu trữ được các bài hát Dân ca khuyết danh tác giả.",
          "answer": true,
          "explain": "Đúng. Giá trị NULL biểu thị trạng thái chưa xác định tác giả."
        }
      ]
    },
    {
      "id": "b20-tf3",
      "context": "Về kỹ thuật lưu trữ và chỉ mục của khóa ngoài trong MySQL:",
      "statements": [
        {
          "text": "a) Động cơ lưu trữ InnoDB hỗ trợ đầy đủ các ràng buộc khóa ngoài và toàn vẹn tham chiếu.",
          "answer": true,
          "explain": "Đúng. InnoDB là chuẩn mặc định hỗ trợ Foreign Key của MySQL."
        },
        {
          "text": "b) MySQL sẽ tự động tạo một chỉ mục (Index) trên cột khóa ngoài để tăng tốc độ truy vấn liên kết bảng.",
          "answer": true,
          "explain": "Đúng. Chỉ mục giúp các câu truy vấn JOIN diễn ra siêu tốc."
        },
        {
          "text": "c) Một bảng con chỉ được phép có tối đa duy nhất 1 khóa ngoài và cấm có khóa ngoài thứ hai.",
          "answer": false,
          "explain": "Sai. Bảng bannhac có thể có 2 khóa ngoài (idNhacsi và idTheloai) hoàn toàn bình thường."
        },
        {
          "text": "d) Sau khi thiết lập khóa ngoài xong, ta bắt buộc phải nhấn nút 'Save' thì cấu hình mới được lưu vào CSDL.",
          "answer": true,
          "explain": "Đúng. Bấm Save để thực thi lệnh ALTER TABLE trên máy chủ."
        }
      ]
    },
    {
      "id": "b20-tf4",
      "context": "Về lợi ích của việc sử dụng khóa ngoài trong quản lý cơ sở dữ liệu:",
      "statements": [
        {
          "text": "a) Khóa ngoài giúp ngăn chặn việc nhập nhầm mã thể loại không tồn tại vào bảng bài hát.",
          "answer": true,
          "explain": "Đúng. Hệ thống sẽ báo lỗi vi phạm ràng buộc toàn vẹn ngay lập tức."
        },
        {
          "text": "b) Dùng khóa ngoài giúp dễ dàng kết nối dữ liệu giữa các bảng bằng câu lệnh SQL INNER JOIN.",
          "answer": true,
          "explain": "Đúng. Khóa ngoài là điều kiện kết nối trong mệnh đề ON của JOIN."
        },
        {
          "text": "c) Khóa ngoài làm cho máy tính tiêu tốn gấp 10 lần điện năng khi hoạt động.",
          "answer": false,
          "explain": "Sai. Ràng buộc khóa ngoài chỉ chiếm lượng tài nguyên tính toán cực nhỏ."
        },
        {
          "text": "d) Thiết lập khóa ngoài là chuẩn mực bắt buộc trong thiết kế cơ sở dữ liệu quan hệ chuyên nghiệp.",
          "answer": true,
          "explain": "Đúng. Đảm bảo tính toàn vẹn dữ liệu cho toàn hệ thống."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b20-es1",
      "q": "Nêu các bước thiết lập Khóa ngoài (Foreign Key) `idNhacsi` trong bảng `bannhac` tham chiếu đến bảng `nhacsi` bằng giao diện phần mềm HeidiSQL.",
      "answer": "Các bước thiết lập khóa ngoài trong HeidiSQL:\n- Bước 1: Tại khung cây bên trái, nhấp chọn bảng `bannhac` cần thiết lập khóa ngoài.\n- Bước 2: Tại khung làm việc bên phải, nhấp chuyển sang thẻ 'Foreign keys'.\n- Bước 3: Nhấn nút 'Add' trên thanh công cụ để tạo một dòng ràng buộc khóa ngoài mới.\n- Bước 4: Cấu hình các thông số chi tiết cho khóa ngoài:\n  + Name: Đặt tên cho ràng buộc là `fk_bannhac_nhacsi`.\n  + Columns: Nhấp chọn cột khóa ngoài của bảng hiện tại là `idNhacsi`.\n  + Reference table: Cuộn danh sách và nhấp chọn bảng cha tham chiếu là `nhacsi`.\n  + Foreign columns: Chọn cột khóa chính tương ứng của bảng cha là `idNhacsi`.\n  + On delete: Chọn hành vi `RESTRICT` (hoặc NO ACTION).\n  + On update: Chọn hành vi `CASCADE`.\n- Bước 5: Nhấn nút 'Save' ở góc dưới bên phải giao diện để lưu và thực thi việc áp dụng khóa ngoài vào cơ sở dữ liệu."
    },
    {
      "id": "b20-es2",
      "q": "Viết câu lệnh SQL (DDL) hoàn chỉnh để tạo bảng `bannhac` gồm 4 trường (idBannhac, tenBannhac, idNhacsi, idTheloai) kèm theo Khóa chính và 2 Khóa ngoài tham chiếu đến bảng `nhacsi` và `theloai`.",
      "answer": "Câu lệnh SQL (DDL) hoàn chỉnh:\n\nCREATE TABLE `bannhac` (\n    `idBannhac` INT NOT NULL AUTO_INCREMENT,\n    `tenBannhac` VARCHAR(200) NOT NULL,\n    `idNhacsi` INT NULL,\n    `idTheloai` INT NULL,\n    PRIMARY KEY (`idBannhac`),\n    CONSTRAINT `fk_bannhac_nhacsi` \n        FOREIGN KEY (`idNhacsi`) REFERENCES `nhacsi` (`idNhacsi`)\n        ON DELETE RESTRICT ON UPDATE CASCADE,\n    CONSTRAINT `fk_bannhac_theloai` \n        FOREIGN KEY (`idTheloai`) REFERENCES `theloai` (`idTheloai`)\n        ON DELETE RESTRICT ON UPDATE CASCADE\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;"
    },
    {
      "id": "b20-es3",
      "q": "Giải thích sự khác biệt giữa hai hành vi toàn vẹn tham chiếu 'ON DELETE RESTRICT' và 'ON DELETE CASCADE' khi người dùng cố gắng xóa một nhạc sĩ đã có các bài hát trong bảng `bannhac`.",
      "answer": "Phân tích hai trường hợp cụ thể:\n1. Trường hợp chọn 'ON DELETE RESTRICT' (Hạn chế / Ngăn chặn):\n- Cơ chế: Khi người dùng thực hiện lệnh xóa một nhạc sĩ (ví dụ nhạc sĩ Văn Cao có idNhacsi = 1) mà trong bảng bannhac đang có bài 'Tiến quân ca' mang idNhacsi = 1, hệ quản trị CSDL sẽ CHẶN ĐỨNG THAO TÁC XÓA và báo lỗi: 'Cannot delete or update a parent row: a foreign key constraint fails'.\n- Ý nghĩa an toàn: Bảo vệ dữ liệu bài hát không bị mất tác giả, buộc người quản trị phải suy xét kỹ lưỡng trước khi quyết định.\n\n2. Trường hợp chọn 'ON DELETE CASCADE' (Xóa tầng liên hoàn):\n- Cơ chế: Khi người dùng thực hiện lệnh xóa nhạc sĩ Văn Cao, hệ thống sẽ xóa bản ghi nhạc sĩ Văn Cao ở bảng nhacsi, đồng thời TỰ ĐỘNG XÓA LUÔN TẤT CẢ CÁC BÀI HÁT của nhạc sĩ Văn Cao trong bảng bannhac.\n- Cảnh báo rủi ro: Nếu không cẩn trọng, hành vi này có thể vô tình xóa mất hàng loạt bài hát quý giá trong hệ thống mà không thể khôi phục lại được."
    },
    {
      "id": "b20-es4",
      "q": "Tại sao trong thiết kế bảng `bannhac`, trường `idNhacsi` nên được cấu hình là 'Allow NULL' (cho phép rỗng) thay vì bắt buộc NOT NULL? Cho một ví dụ âm nhạc thực tế chứng minh tính đúng đắn của thiết kế này.",
      "answer": "1. Lý do chọn 'Allow NULL' cho trường `idNhacsi`:\n- Phản ánh đúng thực tiễn khách quan của đời sống âm nhạc: Trong kho tàng âm nhạc có rất nhiều tác phẩm dân ca cổ truyền hoặc các làn điệu dân gian được truyền khẩu qua nhiều thế hệ mà không rõ tác giả sáng tác là ai (khuyết danh).\n- Đảm bảo tính linh hoạt khi cập nhật dữ liệu: Cho phép hệ thống lưu trữ được ngay các bài hát dân gian vào cơ sở dữ liệu mà không bắt buộc phải bịa ra một tác giả không có thật, hoặc dùng trong trường hợp bài hát mới sưu tầm chưa kịp xác minh bản quyền tác giả.\n\n2. Ví dụ thực tế chứng minh:\n- Bài hát 'Cò lả' hoặc 'Bèo dạt mây trôi' là các làn điệu Dân ca quan họ Bắc Ninh khuyết danh tác giả.\n- Khi lưu bản nhạc này vào bảng bannhac: Ta nhập `tenBannhac` = 'Bèo dạt mây trôi', `idTheloai` = 2 (Dân ca), và để trường `idNhacsi` mang giá trị `NULL`. Dữ liệu hoàn toàn hợp lệ, không vi phạm bất kỳ ràng buộc nào và phản ánh chính xác lịch sử âm nhạc Việt Nam."
    }
  ]
};
