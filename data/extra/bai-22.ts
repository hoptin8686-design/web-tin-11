import { LessonExtra } from "@/lib/types";

// Bài 22: Thực hành cập nhật bảng dữ liệu có tham chiếu (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b22-tf1",
      "context": "Một nhóm học sinh thực hành quản lý CSDL âm nhạc gồm 2 bảng: casi(idCasi, tenCasi) và bannhac(idBannhac, tenBannhac, idCasi). Nhóm thảo luận về quy trình nhập và sửa dữ liệu cho các bảng.",
      "statements": [
        {
          "text": "Học sinh có thể nhập dữ liệu cho bảng bannhac trước khi có bất kỳ dữ liệu nào trong bảng casi mà không gặp lỗi.",
          "answer": false,
          "explain": "Sai. Vì bannhac tham chiếu đến casi qua idCasi, nếu bảng casi trống thì không có mã nào hợp lệ để nhập vào khóa ngoại."
        },
        {
          "text": "Bảng casi đóng vai trò là bảng cha (bảng tham chiếu), còn bảng bannhac là bảng con (bảng chứa khóa ngoại).",
          "answer": true,
          "explain": "Đúng. Bảng chứa khóa chính là bảng cha, bảng chứa khóa ngoại trỏ tới là bảng con."
        },
        {
          "text": "Nếu nhập một bài hát có idCasi = 99 trong khi bảng casi chỉ có mã từ 1 đến 5, hệ QTCSDL sẽ từ chối và báo lỗi vi phạm khóa ngoại.",
          "answer": true,
          "explain": "Đúng. Ràng buộc toàn vẹn tham chiếu sẽ chặn thao tác chèn giá trị không tồn tại ở bảng cha."
        },
        {
          "text": "Để nhập dữ liệu thuận tiện, người dùng nên chuẩn bị danh sách ca sĩ trong bảng casi trước, sau đó tra cứu mã ca sĩ khi điền vào bảng bannhac.",
          "answer": true,
          "explain": "Đúng. Đây là quy trình chuẩn khi làm việc với CSDL quan hệ."
        }
      ]
    },
    {
      "id": "b22-tf2",
      "context": "Xét tình huống xóa và sửa dữ liệu trong CSDL quan hệ có khóa ngoại với các thiết lập tùy chọn ON DELETE và ON UPDATE.",
      "statements": [
        {
          "text": "Với thiết lập ON DELETE CASCADE, khi xóa một ca sĩ ở bảng cha thì mọi bài hát của ca sĩ đó ở bảng con sẽ tự động bị xóa theo.",
          "answer": true,
          "explain": "Đúng. CASCADE thực hiện hiệu ứng dây chuyền xóa sạch các bản ghi phụ thuộc ở bảng con."
        },
        {
          "text": "Thiết lập ON DELETE RESTRICT cho phép xóa bản ghi ở bảng cha ngay cả khi đang có nhiều bản ghi ở bảng con tham chiếu tới.",
          "answer": false,
          "explain": "Sai. RESTRICT sẽ ngăn chặn và từ chối thao tác xóa ở bảng cha nếu còn dữ liệu phụ thuộc ở bảng con."
        },
        {
          "text": "Tùy chọn ON UPDATE CASCADE cho phép khi mã ca sĩ ở bảng casi thay đổi từ 1 thành 100 thì giá trị idCasi ở các bài hát tương ứng tự động cập nhật thành 100.",
          "answer": true,
          "explain": "Đúng. Đây là tính năng cập nhật đồng bộ của ON UPDATE CASCADE."
        },
        {
          "text": "Tùy chọn ON DELETE SET NULL có thể áp dụng được ngay cả khi trường idCasi ở bảng con được khai báo là NOT NULL.",
          "answer": false,
          "explain": "Sai. Nếu cột có ràng buộc NOT NULL thì không thể nhận giá trị NULL, do đó không thể gán SET NULL."
        }
      ]
    },
    {
      "id": "b22-tf3",
      "context": "Trong buổi thực hành sử dụng phần mềm HeidiSQL để cập nhật dữ liệu bảng có khóa ngoại, học sinh thực hiện các thao tác trên giao diện.",
      "statements": [
        {
          "text": "Trên giao diện thẻ Data của HeidiSQL, học sinh có thể click đúp chuột vào từng ô để sửa giá trị và nhấn phím Post hoặc chuyển dòng để lưu lại.",
          "answer": true,
          "explain": "Đúng. Thao tác chỉnh sửa trực quan trên Data grid của HeidiSQL rất thuận tiện."
        },
        {
          "text": "Nếu HeidiSQL thông báo lỗi 'Foreign key constraint fails' khi thêm dòng mới, nguyên nhân chắc chắn là do ổ cứng máy tính bị đầy dung lượng.",
          "answer": false,
          "explain": "Sai. Lỗi này là do giá trị khóa ngoại vừa nhập không tồn tại trong bảng cha liên kết."
        },
        {
          "text": "HeidiSQL cho phép người dùng mở đồng thời tab Data của cả hai bảng casi và bannhac để tiện tra cứu mã ca sĩ khi nhập liệu.",
          "answer": true,
          "explain": "Đúng. HeidiSQL hỗ trợ mở nhiều tab giúp xem và tra cứu dữ liệu dễ dàng."
        },
        {
          "text": "Người dùng không thể dùng câu lệnh INSERT INTO trong tab Query mà bắt buộc chỉ được nhập bằng chuột trên lưới Data.",
          "answer": false,
          "explain": "Sai. Tab Query cho phép thực thi mọi câu lệnh SQL bao gồm INSERT, UPDATE, DELETE."
        }
      ]
    },
    {
      "id": "b22-tf4",
      "context": "Xét về tính toàn vẹn dữ liệu và các rủi ro khi thao tác trên CSDL quan hệ trong thực tế.",
      "statements": [
        {
          "text": "Hiện tượng 'bản ghi mồ côi' (orphan record) xảy ra khi dữ liệu ở bảng con trỏ tới một khóa chính không hề tồn tại ở bảng cha.",
          "answer": true,
          "explain": "Đúng. Đó là định nghĩa chính xác của orphan record trong thiết kế CSDL."
        },
        {
          "text": "Ràng buộc khóa ngoại làm giảm độ tin cậy của dữ liệu và chỉ làm hệ thống chạy chậm đi nên không nên dùng.",
          "answer": false,
          "explain": "Sai. Ràng buộc khóa ngoại là cốt lõi đảm bảo tính toàn vẹn và nhất quán của CSDL quan hệ."
        },
        {
          "text": "Để xóa an toàn một ca sĩ khi dùng tùy chọn RESTRICT, người quản trị cần xóa hoặc cập nhật các bài hát của ca sĩ đó trước, rồi mới xóa ca sĩ.",
          "answer": true,
          "explain": "Đúng. Quy trình giải phóng tham chiếu trước khi xóa cha là nguyên tắc an toàn dữ liệu."
        },
        {
          "text": "Lệnh SET FOREIGN_KEY_CHECKS = 0; nên được bật vĩnh viễn trong các ứng dụng thực tế để tăng tốc độ lưu trữ.",
          "answer": false,
          "explain": "Sai. Tắt vĩnh viễn kiểm tra khóa ngoại sẽ phá vỡ tính toàn vẹn dữ liệu của toàn bộ hệ thống."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b22-es1",
      "q": "Nêu lỗi thường gặp nhất khi nhập dữ liệu vào cột khóa ngoại của bảng con và cách khắc phục lỗi này.",
      "answer": "Lỗi thường gặp nhất là vi phạm ràng buộc khóa ngoại (Foreign key constraint fails) do nhập một giá trị không tồn tại trong cột khóa chính của bảng cha.\nCách khắc phục: Tra cứu bảng cha để lấy đúng mã khóa chính đang có sẵn để nhập vào, hoặc thêm bản ghi tương ứng vào bảng cha trước rồi mới nhập bảng con."
    },
    {
      "id": "b22-es2",
      "q": "Phân biệt sự khác nhau cơ bản giữa hai tùy chọn ON DELETE RESTRICT và ON DELETE CASCADE khi xóa một dòng ở bảng cha.",
      "answer": "- ON DELETE RESTRICT: Hệ QTCSDL sẽ ngăn chặn thao tác xóa và báo lỗi nếu vẫn còn bản ghi ở bảng con đang tham chiếu tới dòng cha đó.\n- ON DELETE CASCADE: Hệ QTCSDL tự động xóa dây chuyền tất cả các bản ghi liên quan ở bảng con khi dòng ở bảng cha bị xóa."
    },
    {
      "id": "b22-es3",
      "q": "Viết câu lệnh SQL cập nhật mã ca sĩ (idCasi) thành 4 cho tất cả các bài hát đang có idCasi = 2 trong bảng bannhac.",
      "answer": "UPDATE bannhac SET idCasi = 4 WHERE idCasi = 2;"
    },
    {
      "id": "b22-es4",
      "q": "Tại sao khi xóa toàn bộ dữ liệu mẫu trong CSDL nhiều bảng, ta cần xóa theo thứ tự bảng con trước, bảng cha sau?",
      "answer": "Vì bảng con đang chứa khóa ngoại tham chiếu đến khóa chính của bảng cha. Nếu xóa bảng cha trước, hệ QTCSDL sẽ báo lỗi vi phạm ràng buộc tham chiếu (trừ khi có CASCADE). Do đó, xóa bảng con trước sẽ giải phóng toàn bộ liên kết tham chiếu, giúp việc xóa bảng cha diễn ra thuận lợi và an toàn."
    }
  ]
};
