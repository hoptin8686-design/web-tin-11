import { LessonExtra } from "@/lib/types";

// Bài 10: Lưu trữ dữ liệu và khai thác thông tin phục vụ quản lí (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b10-tf1",
      "context": "Trường THPT Phục Hòa quản lý hồ sơ của hơn 1000 học sinh bằng phần mềm quản lý trường học trực tuyến. Giáo viên và cán bộ văn phòng thường xuyên thực hiện các thao tác trên cơ sở dữ liệu:",
      "statements": [
        {
          "text": "a) Thao tác nhập thông tin ban đầu của các học sinh lớp 10 mới trúng tuyển vào trường thuộc nhóm công việc Tạo lập hồ sơ.",
          "answer": true,
          "explain": "Đúng. Đây là thao tác khởi tạo hồ sơ dữ liệu ban đầu cho các đối tượng mới."
        },
        {
          "text": "b) Khi sửa lại ngày tháng năm sinh bị gõ nhầm của một bạn học sinh, giáo viên đang thực hiện thao tác Cập nhật hồ sơ.",
          "answer": true,
          "explain": "Đúng. Chỉnh sửa dữ liệu sai sót là một dạng thao tác cập nhật dữ liệu."
        },
        {
          "text": "c) Thao tác in danh sách học sinh đạt danh hiệu Học sinh Giỏi cuối năm thuộc nhóm công việc Tạo lập hồ sơ.",
          "answer": false,
          "explain": "Sai. In danh sách lọc theo điều kiện học lực là thao tác Khai thác thông tin (lập báo cáo)."
        },
        {
          "text": "d) Mã số học sinh là trường dữ liệu định danh giúp phân biệt các học sinh trùng cả họ và tên lẫn ngày tháng năm sinh.",
          "answer": true,
          "explain": "Đúng. Mã học sinh là duy nhất cho mỗi cá nhân trong toàn trường."
        }
      ]
    },
    {
      "id": "b10-tf2",
      "context": "So sánh giữa phương thức quản lý bằng sổ sách giấy truyền thống và phương thức quản lý bằng máy tính điện tử:",
      "statements": [
        {
          "text": "a) Quản lý bằng máy tính giúp tra cứu thông tin của một học sinh trong hàng nghìn bản ghi chỉ trong vài giây.",
          "answer": true,
          "explain": "Đúng. Tốc độ tìm kiếm của máy tính vượt trội gấp hàng nghìn lần so với lật sổ giấy thủ công."
        },
        {
          "text": "b) Sổ sách giấy truyền thống an toàn tuyệt đối trước mọi nguy cơ như hỏa hoạn, ngập nước, mối mọt ăn mòn.",
          "answer": false,
          "explain": "Sai. Giấy tờ rất dễ bị mục nát, cháy nổ, ẩm mốc và mất mát dữ liệu vĩnh viễn không thể phục hồi."
        },
        {
          "text": "c) Quản lý trên máy tính cho phép sao lưu dữ liệu dự phòng ra nhiều thiết bị khác nhau để phòng ngừa rủi ro mất mát.",
          "answer": true,
          "explain": "Đúng. Khả năng sao lưu và nhân bản dữ liệu số là ưu thế vượt trội."
        },
        {
          "text": "d) Quản lý trên máy tính đòi hỏi phần mềm phải có cơ chế phân quyền để ngăn chặn việc sửa điểm trái phép.",
          "answer": true,
          "explain": "Đúng. Bảo mật và phân quyền chặt chẽ là yêu cầu bắt buộc của quản lý số."
        }
      ]
    },
    {
      "id": "b10-tf3",
      "context": "Trong quy trình quản lý mượn trả sách tại thư viện trường học:",
      "statements": [
        {
          "text": "a) Khi một cuốn sách cũ bị rách nát hoàn toàn và phải thanh lý, thủ thư sẽ thực hiện thao tác Xóa bản ghi của cuốn sách đó khỏi cơ sở dữ liệu sách đang phục vụ.",
          "answer": true,
          "explain": "Đúng. Xóa bản ghi đối tượng không còn sử dụng thuộc nhóm thao tác cập nhật."
        },
        {
          "text": "b) Khi học sinh trả sách đúng hạn, phần mềm ghi nhận trạng thái 'Đã trả' vào phiếu mượn tương ứng.",
          "answer": true,
          "explain": "Đúng. Đây là thao tác cập nhật trạng thái giao dịch mượn trả."
        },
        {
          "text": "c) Việc thống kê danh sách các cuốn sách được mượn nhiều nhất trong tháng là ví dụ về thao tác Cập nhật hồ sơ.",
          "answer": false,
          "explain": "Sai. Đây là thao tác Khai thác hồ sơ phục vụ công tác thống kê và lập kế hoạch mua sắm."
        },
        {
          "text": "d) Sử dụng mã vạch (Barcode) hoặc mã QR trên mỗi cuốn sách giúp thao tác nhập dữ liệu mượn trả diễn ra nhanh chóng và chính xác hơn.",
          "answer": true,
          "explain": "Đúng. Quét mã vạch tự động hóa khâu thu thập dữ liệu đầu vào không cần gõ phím."
        }
      ]
    },
    {
      "id": "b10-tf4",
      "context": "Về chất lượng dữ liệu và các thao tác xử lý trong công tác quản lý:",
      "statements": [
        {
          "text": "a) Dữ liệu không đầy đủ hoặc bị trùng lặp có thể dẫn đến việc kết xuất báo cáo thống kê bị sai lệch nghiêm trọng.",
          "answer": true,
          "explain": "Đúng. Tính toàn vẹn và không dư thừa là điều kiện để thông tin rút ra có độ tin cậy."
        },
        {
          "text": "b) Thao tác sắp xếp (Sort) dữ liệu làm thay đổi vĩnh viễn nội dung và bản chất điểm số của từng học sinh.",
          "answer": false,
          "explain": "Sai. Sắp xếp chỉ tổ chức lại thứ tự hiển thị của các hàng, không làm thay đổi giá trị điểm số của bất kỳ ai."
        },
        {
          "text": "c) Bảng tính Excel thông thường có thể thay thế hoàn hảo cho các hệ quản trị cơ sở dữ liệu lớn của ngành bảo hiểm hay ngân hàng hàng triệu khách hàng.",
          "answer": false,
          "explain": "Sai. Excel bị giới hạn số dòng (1 triệu dòng), không hỗ trợ giao dịch đồng thời và bảo mật yếu, không thể thay thế DBMS chuyên nghiệp."
        },
        {
          "text": "d) Khai thác thông tin đúng đắn giúp ban giám hiệu nhà trường có cái nhìn tổng quan để nâng cao chất lượng dạy và học.",
          "answer": true,
          "explain": "Đúng. Đây là mục đích tối thượng của ứng dụng CNTT trong giáo dục."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b10-es1",
      "q": "Nêu và giải thích ba nhóm thao tác cơ bản đối với hồ sơ trong bài toán quản lý dữ liệu thực tế. Cho ví dụ minh họa cho từng nhóm thao tác trong bài toán quản lý học sinh.",
      "answer": "Ba nhóm thao tác cơ bản đối với hồ sơ quản lý:\n1. Tạo lập hồ sơ:\n- Ý nghĩa: Xác định cấu trúc các trường thông tin cần quản lý, thu thập và nhập dữ liệu ban đầu cho các đối tượng.\n- Ví dụ: Đầu năm học, giáo vụ tạo bảng dữ liệu lớp 10A1 gồm các cột (Mã học sinh, Họ tên, Ngày sinh, Giới tính, Quê quán) và nhập thông tin 35 học sinh mới trúng tuyển vào trường.\n\n2. Cập nhật hồ sơ:\n- Ý nghĩa: Duy trì sự chính xác, liên tục và phản ánh đúng thực tế của dữ liệu qua thời gian, bao gồm 3 việc: thêm mới, sửa đổi và xóa bỏ dữ liệu.\n- Ví dụ: Nhập bổ sung điểm thi học kỳ cho học sinh (thêm), sửa lại ngày sinh bị ghi sai sót từ 12/05 thành 15/05 (sửa), xóa tên học sinh chuyển sang trường khác khỏi danh sách lớp (xóa).\n\n3. Khai thác hồ sơ:\n- Ý nghĩa: Trích xuất, tổ chức lại dữ liệu thành các thông tin có ý nghĩa phục vụ nhu cầu quản trị và ra quyết định.\n- Ví dụ: Lọc danh sách các bạn có điểm Tin học từ 9.0 trở lên để bồi dưỡng thi học sinh giỏi (tìm kiếm/lọc); sắp xếp danh sách học sinh theo điểm trung bình từ cao xuống thấp (sắp xếp); in bảng tổng kết khen thưởng cuối năm cho ban giám hiệu (lập báo cáo)."
    },
    {
      "id": "b10-es2",
      "q": "So sánh ưu điểm và nhược điểm giữa phương thức quản lý bằng sổ sách giấy truyền thống và phương thức quản lý bằng phần mềm máy tính điện tử.",
      "answer": "1. Phương thức quản lý bằng sổ sách giấy truyền thống:\n- Ưu điểm: Đơn giản, chi phí đầu tư ban đầu thấp, không đòi hỏi kỹ năng tin học hay nguồn điện.\n- Nhược điểm: Chiếm diện tích phòng lưu trữ hồ sơ lớn; dễ hư hỏng mục nát do độ ẩm, mối mọt, hỏa hoạn; việc tra cứu thông tin thủ công cực kỳ tốn thời gian; tính toán thống kê dễ nhầm lẫn; khó chia sẻ thông tin cho nhiều người cùng lúc; tính bảo mật kém (dễ bị đọc trộm).\n\n2. Phương thức quản lý bằng phần mềm máy tính:\n- Ưu điểm: Lưu trữ dung lượng khổng lồ trên ổ đĩa nhỏ gọn hoặc đám mây; tốc độ tìm kiếm, lọc dữ liệu và tính toán thống kê diễn ra tức thời (trong vài giây); độ chính xác tuyệt đối; dễ dàng in ấn và xuất báo cáo đẹp mắt; hỗ trợ phân quyền người dùng và sao lưu dự phòng an toàn; nhiều người có thể cùng làm việc đồng thời qua mạng.\n- Nhược điểm: Đòi hỏi chi phí đầu tư trang bị phần cứng, máy tính, mạng và phần mềm bản quyền; người vận hành phải được đào tạo kỹ năng số; rủi ro mất dữ liệu nếu bị nhiễm virus, lỗi phần cứng hoặc bị tấn công mạng nếu thiếu biện pháp bảo mật."
    },
    {
      "id": "b10-es3",
      "q": "Trong bài toán quản lý thư viện trường học, em hãy chỉ ra 3 bảng dữ liệu cần tạo và xác định trường dữ liệu đóng vai trò định danh duy nhất (khóa) cho mỗi bảng.",
      "answer": "Ba bảng dữ liệu cần tạo trong quản lý thư viện:\n1. Bảng SÁCH (QUANLY_SACH):\n- Các trường: Mã sách, Tên sách, Tác giả, Năm xuất bản, Nhà xuất bản, Thể loại, Vị trí kệ, Số lượng tồn.\n- Trường định danh duy nhất (Khóa chính): Mã sách (ví dụ: S001, S002) - mỗi cuốn sách hoặc ấn bản có một mã riêng biệt không trùng nhau.\n\n2. Bảng ĐỘC GIẢ (DOC_GIA):\n- Các trường: Mã độc giả, Họ tên, Ngày sinh, Lớp học/Tổ chuyên môn, Số điện thoại, Ngày cấp thẻ, Ngày hết hạn.\n- Trường định danh duy nhất (Khóa chính): Mã độc giả (ví dụ: DG0123) - mỗi học sinh hoặc giáo viên được cấp một mã thẻ thư viện duy nhất.\n\n3. Bảng PHIẾU MƯỢN TRẢ (MUON_TRA):\n- Các trường: Mã phiếu mượn, Mã độc giả, Mã sách, Ngày mượn, Hạn trả, Ngày trả thực tế, Tình trạng sách khi trả, Tiền phạt (nếu có).\n- Trường định danh duy nhất (Khóa chính): Mã phiếu mượn (ví dụ: PM1001) - mỗi lần mượn sách tạo một giao dịch phiếu mượn duy nhất."
    },
    {
      "id": "b10-es4",
      "q": "Tại sao việc quản lý dữ liệu lớn trên các tệp bảng tính Excel rời rạc lại bộc lộ nhiều hạn chế khi doanh nghiệp hoặc trường học phát triển quy mô? Nêu 3 lý do giải thích.",
      "answer": "Ba lý do khiến Excel bộc lộ hạn chế so với hệ quản trị CSDL chuyên nghiệp:\n1. Hiện tượng dư thừa và không nhất quán dữ liệu (Data Redundancy & Inconsistency): Khi quản lý bằng nhiều file Excel riêng rẽ (ví dụ file Điểm lớp 10, file Đoàn thanh niên, file Học phí), thông tin học sinh bị gõ lặp lại ở nhiều nơi. Khi học sinh đổi số điện thoại, nếu chỉ sửa ở file này mà quên sửa ở file khác sẽ dẫn đến mâu thuẫn số liệu.\n2. Hạn chế làm việc đồng thời (Concurrency): Tệp Excel thông thường chỉ tối ưu cho một người mở và chỉnh sửa tại một thời điểm. Khi hàng chục giáo viên cùng nhập điểm, các tệp dễ bị xung đột phiên bản, bị ghi đè mất dữ liệu của nhau.\n3. Khả năng bảo mật và phân quyền yếu kém: Excel chỉ hỗ trợ đặt mật khẩu mở file đơn giản, không thể phân quyền chi tiết (ví dụ: giáo viên môn Toán chỉ được sửa cột điểm Toán, không được xem điểm Văn; học sinh chỉ được xem điểm của mình mà không được xem điểm bạn khác); đồng thời Excel dễ bị xóa nhầm dữ liệu mà không có cơ chế nhật ký (log) ghi nhận thủ phạm."
    }
  ]
};
