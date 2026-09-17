import { LessonExtra } from "@/lib/types";

// Bài 27: Công cụ vẽ và một số ứng dụng (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b27-tf1",
      "context": "Bạn Mai được giao nhiệm vụ thiết kế một tấm poster tuyên truyền 'Ngày hội đọc sách' của trường bằng phần mềm GIMP. Mai tiến hành tạo nền và tiêu đề.",
      "statements": [
        {
          "text": "a) Mai tạo tệp mới với kích thước chuẩn khổ A4 và sử dụng công cụ Gradient Tool để tạo nền chuyển sắc êm dịu từ xanh dương sang xanh lá.",
          "answer": true,
          "explain": "Đúng. Nền Gradient tạo cảm giác hiện đại và trang nhã cho poster học đường."
        },
        {
          "text": "b) Khi dùng công cụ Text Tool gõ tiêu đề 'NGÀY HỘI ĐỌC SÁCH', GIMP sẽ tự động sinh ra một Text Layer riêng biệt trong bảng Layers.",
          "answer": true,
          "explain": "Đúng. Text Layer độc lập giúp chỉnh sửa nội dung chữ dễ dàng mà không làm hỏng nền."
        },
        {
          "text": "c) Mai không thể thay đổi kích thước chữ và font chữ sau khi đã bấm chuột ra ngoài ô nhập văn bản.",
          "answer": false,
          "explain": "Sai. Chỉ cần dùng công cụ Text nhấp lại vào dòng chữ là có thể bôi đen đổi font, cỡ chữ và màu sắc bất kỳ lúc nào."
        },
        {
          "text": "d) Áp dụng hiệu ứng Drop Shadow (Filters -> Light and Shadow -> Drop Shadow...) giúp tiêu đề chính nổi bật và dễ đọc hơn trên nền màu.",
          "answer": true,
          "explain": "Đúng. Bóng đổ tạo chiều sâu thị giác tách bạch dòng chữ khỏi hình nền."
        }
      ]
    },
    {
      "id": "b27-tf2",
      "context": "Mai tìm được một bức ảnh chụp cuốn sách cổ quý giá trên thư viện ảnh nhưng bức ảnh có vài hạt bụi bẩn và vết xước nhỏ trên bìa sách.",
      "statements": [
        {
          "text": "a) Mai có thể sử dụng công cụ Healing Tool (phím H) để tẩy sạch các đốm bụi bẩn mà vẫn giữ được chất liệu sần sùi tự nhiên của bìa sách cổ.",
          "answer": true,
          "explain": "Đúng. Healing Tool dung hòa chất liệu và màu sắc xung quanh cực kỳ hiệu quả."
        },
        {
          "text": "b) Thao tác giữ phím Ctrl và nhấp chuột vào vùng da lành hoặc vùng bìa sách sạch là bắt buộc để chọn vùng lấy mẫu cho công cụ Healing Tool.",
          "answer": true,
          "explain": "Đúng. Điểm mẫu nguồn là căn cứ để công cụ tính toán vá điểm lỗi."
        },
        {
          "text": "c) Công cụ Clone Stamp Tool chỉ có thể sao chép văn bản chứ không thể sao chép điểm ảnh hình ảnh.",
          "answer": false,
          "explain": "Sai. Clone Stamp sao chép mọi điểm ảnh đồ họa một cách chính xác từng pixel."
        },
        {
          "text": "d) Mai nên dùng công cụ Paintbrush tô màu trắng xóa trực tiếp đè lên vết xước để tiết kiệm thời gian nhất.",
          "answer": false,
          "explain": "Sai. Tô màu trắng đè lên sẽ để lại một vệt bệt trắng loang lổ thô thiển làm hỏng bức ảnh."
        }
      ]
    },
    {
      "id": "b27-tf3",
      "context": "Xét việc sử dụng cọ vẽ và các công cụ tô màu trong phần mềm đồ họa GIMP.",
      "statements": [
        {
          "text": "a) Nét cọ của công cụ Paintbrush luôn có đường viền khử răng cưa mềm mại hơn nét vẽ của công cụ Pencil.",
          "answer": true,
          "explain": "Đúng. Paintbrush có cơ chế khử răng cưa anti-aliasing tạo độ mượt chuyển tiếp."
        },
        {
          "text": "b) Để vẽ một đường thẳng tắp, người dùng nhấp điểm đầu, giữ phím Shift rồi nhấp điểm kết thúc.",
          "answer": true,
          "explain": "Đúng. Đây là phím tắt hỗ trợ dựng đường thẳng cực nhanh trong GIMP."
        },
        {
          "text": "c) Công cụ Bucket Fill chỉ có thể đổ một màu đồng nhất chứ không thể đổ các mẫu họa tiết (Pattern).",
          "answer": false,
          "explain": "Sai. Bucket Fill có tùy chọn 'Pattern fill' cho phép đổ các họa tiết hoa văn phong phú."
        },
        {
          "text": "d) Công cụ Color Picker (phím O) giúp lấy chính xác mã màu của một chi tiết trên ảnh để áp dụng cho màu chữ hoặc màu cọ vẽ.",
          "answer": true,
          "explain": "Đúng. Ống hút màu Color Picker giúp đảm bảo tính đồng bộ màu sắc trong thiết kế."
        }
      ]
    },
    {
      "id": "b27-tf4",
      "context": "Các nguyên tắc mỹ thuật ứng dụng khi thiết kế ấn phẩm truyền thông học đường bằng phần mềm GIMP.",
      "statements": [
        {
          "text": "a) Trên một poster học đường, người thiết kế nên sử dụng đồng thời từ 8 đến 10 kiểu font chữ khác nhau để tạo sự phong phú tối đa.",
          "answer": false,
          "explain": "Sai. Dùng quá nhiều font chữ gây rối mắt, mất tính thẩm mỹ và làm giảm khả năng tiếp nhận thông tin."
        },
        {
          "text": "b) Màu chữ và màu nền cần có độ tương phản cao (như chữ sáng trên nền tối hoặc chữ tối trên nền sáng) để người xem dễ đọc từ xa.",
          "answer": true,
          "explain": "Đúng. Tương phản chữ - nền là quy tắc cốt tử trong thiết kế biển bảng truyền thông."
        },
        {
          "text": "c) Thông điệp chính của poster cần được đặt ở vị trí trọng tâm thị giác và có kích thước nổi bật hơn các thông tin phụ trợ.",
          "answer": true,
          "explain": "Đúng. Phân cấp thị giác rõ ràng giúp người xem nắm bắt nội dung trọng tâm ngay từ cái nhìn đầu tiên."
        },
        {
          "text": "d) Khi lưu sản phẩm cuối cùng, Mai nên xóa bỏ tệp gốc .xcf để tiết kiệm vài Megabyte bộ nhớ cho máy tính của trường.",
          "answer": false,
          "explain": "Sai. Phải luôn giữ lại file gốc .xcf để khi thầy cô yêu cầu sửa đổi ngày giờ hay bổ sung tên diễn giả thì có thể sửa ngay lập tức."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b27-es1",
      "q": "So sánh nguyên lý hoạt động và trường hợp sử dụng tối ưu giữa hai công cụ chỉnh sửa phục chế: Clone Stamp Tool và Healing Tool.",
      "answer": "- Clone Stamp Tool (phím C):\\n+ Nguyên lý: Sao chép chính xác 100% màu sắc và kết cấu từng điểm ảnh từ vùng nguồn (Source) đè nguyên xi sang vùng đích.\\n+ Trường hợp tối ưu: Thích hợp khi cần nhân bản một đối tượng (như nhân đôi bông hoa, ngôi sao) hoặc sửa các chi tiết có đường nét ranh giới rõ ràng, hình học cố định.\\n- Healing Tool (phím H):\\n+ Nguyên lý: Lấy kết cấu của vùng nguồn nhưng tự động tính toán dung hòa màu sắc và ánh sáng tương thích với vùng da lân cận bao quanh điểm đích.\\n+ Trường hợp tối ưu: Tối ưu hàng đầu cho việc tẩy xóa khuyết điểm nhỏ trên bề mặt hữu cơ (như xóa vết mụn, nốt tàn nhang, nếp nhăn trên da mặt hoặc xóa vết xước bụi bẩn trên bầu trời) mà không để lại bất kỳ vết chắp vá lộ liễu nào."
    },
    {
      "id": "b27-es2",
      "q": "Nêu 4 nguyên tắc cơ bản về bố cục chữ (Typography) cần tuân thủ khi thiết kế một poster tuyên truyền trên GIMP.",
      "answer": "Bốn nguyên tắc bố cục chữ (Typography) quan trọng:\\n1. Giới hạn số lượng font chữ: Chỉ nên sử dụng tối đa 2 đến 3 họ font chữ hài hòa trên toàn bộ ấn phẩm (1 font ấn tượng cho tiêu đề, 1 font đơn giản dễ đọc cho nội dung).\\n2. Tạo sự phân cấp thị giác rõ ràng (Visual Hierarchy): Tiêu đề chính phải có kích thước lớn nhất và đậm nhất, tiếp đến là tiêu đề phụ, và nhỏ nhất là phần thông tin chi tiết (thời gian, địa điểm).\\n3. Đảm bảo độ tương phản cao: Màu chữ phải tương phản mạnh với màu nền (ví dụ chữ trắng/vàng trên nền xanh thẫm; chữ đen/xanh đậm trên nền sáng) để đảm bảo người xem đứng từ xa vẫn đọc được dễ dàng.\\n4. Khoảng cách và căn lề hợp lý: Điều chỉnh khoảng cách giữa các dòng (Line spacing) và các chữ cái (Letter spacing) thông thoáng, căn lề nhất quán (trung tâm hoặc căn trái), tránh chữ dính sát vào mép viền poster."
    },
    {
      "id": "b27-es3",
      "q": "Mô tả các bước tạo hiệu ứng bóng đổ (Drop Shadow) cho một dòng chữ nghệ thuật trong phần mềm GIMP.",
      "answer": "Các bước tạo hiệu ứng Drop Shadow cho chữ:\\n1. Chọn lớp chữ: Nhấp chuột chọn đúng lớp văn bản (Text Layer) cần tạo hiệu ứng trong bảng Layers.\\n2. Mở bộ lọc hiệu ứng: Vào thanh bảng chọn Filters -> Chọn Light and Shadow -> Chọn 'Drop Shadow...'.\\n3. Thiết lập thông số trong hộp thoại Drop Shadow:\\n- X, Y: Điều chỉnh độ lệch khoảng cách của bóng theo phương ngang và phương dọc.\\n- Blur radius: Bán kính làm mờ nhòe (chỉ số càng cao thì bóng càng mềm êm).\\n- Opacity: Độ đậm nhạt của bóng đen.\\n- Color: Màu của bóng (mặc định là màu đen).\\n4. Áp dụng hiệu ứng: Nhấn nút OK để phần mềm tự động tạo bóng đổ phía sau dòng chữ."
    },
    {
      "id": "b27-es4",
      "q": "Tại sao khi tạo chữ bằng Text Tool trong GIMP, phần mềm lại tự động tạo ra một 'Text Layer' riêng biệt mà không vẽ trực tiếp lên lớp nền? Điều này mang lại lợi ích gì?",
      "answer": "- Lý do và lợi ích:\\n+ Bảo toàn tính độc lập của dữ liệu: Văn bản được lưu giữ dưới dạng chuỗi ký tự số và định dạng vector chứ không bị biến thành các điểm ảnh bitmap cố định đè chết lên ảnh nền.\\n+ Khả năng chỉnh sửa linh hoạt: Người thiết kế có thể quay lại sửa đổi lỗi chính tả, thay đổi nội dung chữ, đổi font chữ, cỡ chữ hoặc màu sắc bất cứ lúc nào mà không cần phải xóa đi vẽ lại.\\n+ Dễ dàng di chuyển và áp dụng hiệu ứng: Có thể tự do dùng Move Tool dịch chuyển vị trí của dòng chữ, biến đổi xoay nghiêng hoặc thêm các bộ lọc hiệu ứng (đổ bóng, viền chữ) mà hoàn toàn không làm trầy xước hay ảnh hưởng đến lớp hình ảnh nền bên dưới."
    }
  ]
};
