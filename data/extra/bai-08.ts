import { LessonExtra } from "@/lib/types";

// Bài 8: Thực hành nâng cao sử dụng thư điện tử và mạng xã hội (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b8-tf1",
      "context": "Cô giáo chủ nhiệm lớp 11A gửi email thông báo kết quả học tập tháng 10 tới phụ huynh của 40 học sinh trong lớp. Cô phân vân giữa việc sử dụng các trường To, CC và BCC:",
      "statements": [
        {
          "text": "a) Nếu cô giáo nhập danh sách 40 địa chỉ email phụ huynh vào trường CC, tất cả các phụ huynh đều sẽ nhìn thấy địa chỉ email của nhau.",
          "answer": true,
          "explain": "Đúng. Trường CC là đồng kính gửi công khai danh sách người nhận."
        },
        {
          "text": "b) Để bảo vệ quyền riêng tư địa chỉ email của từng phụ huynh, cô giáo nên nhập danh sách 40 địa chỉ email vào trường BCC.",
          "answer": true,
          "explain": "Đúng. Trường BCC bảo mật danh sách người nhận, không ai thấy email của người khác."
        },
        {
          "text": "c) Người nhận trong trường BCC sẽ không nhận được thư nếu trường To để trống hoàn toàn.",
          "answer": false,
          "explain": "Sai. Hầu hết hệ thống email (như Gmail) vẫn gửi bình thường hoặc người gửi có thể điền chính email của mình vào ô To."
        },
        {
          "text": "d) Dung lượng tệp đính kèm tối đa được phép gửi trực tiếp qua dịch vụ Gmail thông thường là khoảng 25 MB.",
          "answer": true,
          "explain": "Đúng. Nếu tệp lớn hơn 25 MB, Gmail sẽ tự chuyển thành liên kết Google Drive."
        }
      ]
    },
    {
      "id": "b8-tf2",
      "context": "Về văn hóa ứng xử (Netiquette) khi tham gia giao tiếp trên mạng xã hội:",
      "statements": [
        {
          "text": "a) Viết hoa toàn bộ nội dung trong tin nhắn hoặc email (ví dụ: 'HÔM NAY PHẢI ĐI HỌC ĐÚNG GIỜ') được xem là biểu hiện của hành vi la hét, thiếu lịch sự.",
          "answer": true,
          "explain": "Đúng. Quy ước văn hóa mạng coi chữ viết hoa toàn bộ là đang quát tháo vào mặt người đọc."
        },
        {
          "text": "b) Học sinh có quyền tự do xúc phạm, bôi nhọ danh dự của bạn bè trên trang cá nhân của mình vì đó là quyền riêng tư cá nhân.",
          "answer": false,
          "explain": "Sai. Xúc phạm danh dự nhân phẩm người khác trên không gian mạng là hành vi vi phạm Luật An ninh mạng và pháp luật dân sự/hình sự."
        },
        {
          "text": "c) Luôn kiểm tra lại lỗi chính tả và ngôn từ trước khi gửi thư điện tử thể hiện sự tôn trọng đối với người nhận.",
          "answer": true,
          "explain": "Đúng. Đây là phép lịch sự cơ bản trong giao tiếp số chuyên nghiệp."
        },
        {
          "text": "d) Tham gia vào các hội nhóm kêu gọi bạo lực mạng (Cyberbullying) đối với một học sinh khác là hành vi bạo lực học đường đáng lên án.",
          "answer": true,
          "explain": "Đúng. Bạo lực mạng gây tổn hại nghiêm trọng đến tâm lý và tinh thần của nạn nhân."
        }
      ]
    },
    {
      "id": "b8-tf3",
      "context": "Về kỹ năng quản lý và bảo mật hộp thư điện tử cá nhân:",
      "statements": [
        {
          "text": "a) Tính năng bộ lọc (Filter) trong Gmail cho phép tự động phân loại và chuyển các thư có tệp bài tập vào một nhãn (Label) riêng biệt.",
          "answer": true,
          "explain": "Đúng. Bộ lọc giúp tự động hóa quản lý luồng thư đến."
        },
        {
          "text": "b) Khi nhận được email từ một ngân hàng lạ yêu cầu cung cấp mã OTP để nhận quà tặng, học sinh nên lập tức gửi mã OTP để nhận tiền.",
          "answer": false,
          "explain": "Sai. Đây là thủ đoạn lừa đảo Phishing đánh cắp tài sản; ngân hàng không bao giờ yêu cầu khách hàng cung cấp OTP qua email."
        },
        {
          "text": "c) Chữ ký thư điện tử (Email Signature) tự động hiển thị ở cuối thư giúp người nhận biết rõ danh tính, lớp học và thông tin liên hệ của người gửi.",
          "answer": true,
          "explain": "Đúng. Chữ ký tạo tính chuyên nghiệp và rõ ràng cho bức thư."
        },
        {
          "text": "d) Thư mục Thư rác (Spam/Junk) sẽ tự động lưu giữ tất cả các thư rác vĩnh viễn không bao giờ xóa.",
          "answer": false,
          "explain": "Sai. Hầu hết dịch vụ email sẽ tự động xóa sạch các thư trong mục Spam sau 30 ngày."
        }
      ]
    },
    {
      "id": "b8-tf4",
      "context": "Về quản lý thông tin và dấu chân kỹ thuật số (Digital Footprint) trên mạng xã hội:",
      "statements": [
        {
          "text": "a) Những hình ảnh, bài đăng và bình luận trên mạng xã hội có thể tồn tại lâu dài và ảnh hưởng đến hình ảnh của cá nhân trong tương lai.",
          "answer": true,
          "explain": "Đúng. Dấu chân số theo suốt cuộc đời và nhiều nhà tuyển dụng sau này sẽ tra cứu lịch sử mạng xã hội của ứng viên."
        },
        {
          "text": "b) Đặt chế độ bài viết ở dạng 'Công khai' (Public) giúp bảo vệ tối đa hình ảnh riêng tư của gia đình khỏi người lạ.",
          "answer": false,
          "explain": "Sai. Chế độ Public cho phép bất kỳ ai trên thế giới cũng có thể xem và tải hình ảnh về."
        },
        {
          "text": "c) Cần tôn trọng bản quyền khi chia sẻ các tác phẩm âm nhạc, video, bài báo của người khác bằng cách dẫn link chính thống.",
          "answer": true,
          "explain": "Đúng. Chia sẻ nguồn chính thống là hành vi sử dụng mạng xã hội văn minh."
        },
        {
          "text": "d) Thuật toán mạng xã hội luôn ưu tiên hiển thị những nội dung khiến người dùng cảm thấy buồn bã và muốn tắt máy tính ngay.",
          "answer": false,
          "explain": "Sai. Thuật toán ưu tiên nội dung giữ chân người dùng xem lâu nhất để tối ưu hóa quảng cáo."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b8-es1",
      "q": "Phân biệt mục đích sử dụng của các trường To, CC và BCC khi soạn một bức thư điện tử. Lấy một ví dụ thực tế minh họa cách dùng phù hợp cho từng trường.",
      "answer": "1. Phân biệt các trường:\n- Trường To (Người nhận chính): Dành cho những người có trách nhiệm trực tiếp xử lý, phản hồi công việc trong bức thư. Mọi người đều nhìn thấy địa chỉ của nhau.\n- Trường CC (Đồng kính gửi - Carbon Copy): Dành cho những người cần nắm bắt thông tin để phối hợp hoặc theo dõi tiến độ, nhưng không phải người trực tiếp giải quyết. Mọi người đều nhìn thấy danh sách email này.\n- Trường BCC (Đồng gửi ẩn - Blind Carbon Copy): Dành cho những người nhận bản sao nhưng cần bảo mật danh tính, không muốn người khác biết họ cũng nhận được thư, hoặc để bảo vệ quyền riêng tư không công khai danh sách email của người nhận.\n\n2. Ví dụ thực tế:\n- Tình huống: Lớp trưởng 11A gửi email nộp bản kế hoạch cắm trại của lớp.\n- Trường To: Gửi cho Bí thư Đoàn trường (người trực tiếp duyệt kế hoạch).\n- Trường CC: Gửi cho Cô giáo chủ nhiệm (để cô nắm được tiến độ nộp của lớp).\n- Trường BCC: Gửi cho 40 bạn học sinh trong lớp (để các bạn đều nhận được bản kế hoạch lưu trữ nhưng không làm lộ email của từng cá nhân ra ngoài)."
    },
    {
      "id": "b8-es2",
      "q": "Trình bày cấu trúc chuẩn của một bức thư điện tử lịch sự, chuyên nghiệp gửi cho thầy cô giáo hoặc nhà tuyển dụng.",
      "answer": "Cấu trúc chuẩn gồm 5 phần:\n1. Tiêu đề thư (Subject): Ngắn gọn, súc tích, tóm tắt rõ mục đích (Ví dụ: [Lớp 11A1] - Bài tập thực hành Tin học số 2 - Nguyễn Văn An).\n2. Lời chào mở đầu (Salutation): Trang trọng, đúng mực (Ví dụ: 'Kính gửi Thầy/Cô Nguyễn Văn B, giáo viên bộ môn Tin học;').\n3. Nội dung chính (Body): Nêu rõ mục đích viết thư, trình bày ngắn gọn, mạch lạc từng ý, dùng ngôn từ lịch sự, không viết tắt, không dùng teen-code, kiểm tra kỹ chính tả.\n4. Lời cảm ơn và lời chúc kết thư (Sign-off): Chúc sức khỏe và cảm ơn thầy cô đã dành thời gian đọc thư (Ví dụ: 'Em xin chân thành cảm ơn Thầy/Cô. Chúc Thầy/Cô một tuần làm việc hiệu quả!').\n5. Chữ ký thư (Email Signature): Ghi rõ họ và tên, chức danh/lớp học, trường học, số điện thoại liên hệ."
    },
    {
      "id": "b8-es3",
      "q": "'Dấu chân kỹ thuật số' (Digital Footprint) là gì? Hãy nêu 3 tác động lâu dài của dấu chân số đối với tương lai của một học sinh nếu không biết cách quản lý cẩn thận.",
      "answer": "1. Khái niệm: Dấu chân kỹ thuật số là toàn bộ dấu vết dữ liệu mà một cá nhân để lại trong quá trình sử dụng Internet và mạng xã hội, bao gồm các bài viết, hình ảnh, bình luận, lượt thích, lịch sử duyệt web và thông tin đăng ký tài khoản.\n\n2. Ba tác động lâu dài:\n- Ảnh hưởng đến hồ sơ xin học bổng và du học: Các hội đồng xét duyệt học bổng quốc tế thường tra cứu lịch sử mạng xã hội của ứng viên. Những bài đăng mang tính thù hằn, phân biệt đối xử hay bạo lực có thể khiến học sinh bị đánh trượt ngay lập tức.\n- Ảnh hưởng đến cơ hội việc làm tương lai: Rất nhiều nhà tuyển dụng hiện nay rà soát dấu chân số để đánh giá nhân cách, lối sống và văn hóa ứng xử của ứng viên trước khi ra quyết định tuyển dụng.\n- Nguy cơ bị tấn công, bắt nạt hoặc tống tiền: Những hình ảnh nhạy cảm hoặc phát ngôn bốc đồng trong quá khứ có thể bị kẻ xấu lưu lại, 'đào bới' và sử dụng làm công cụ bôi nhọ danh dự hoặc tống tiền khi cá nhân đó đạt được thành công trong xã hội."
    },
    {
      "id": "b8-es4",
      "q": "Nếu em hoặc bạn cùng lớp bị một nhóm người ẩn danh công kích, bêu riếu và bắt nạt trên mạng xã hội (Cyberbullying), em sẽ hướng dẫn bạn thực hiện quy trình 4 bước xử lý an toàn như thế nào?",
      "answer": "Quy trình 4 bước xử lý an toàn khi bị bắt nạt qua mạng:\n- Bước 1: Giữ bình tĩnh và không đôi co đáp trả: Tuyệt đối không tức giận chửi bới hay bình luận trả đũa, vì việc đó chỉ kích động kẻ xấu leo thang công kích và tạo thêm rắc rối pháp lý.\n- Bước 2: Thu thập và lưu giữ bằng chứng: Nhanh chóng chụp lại toàn bộ màn hình tin nhắn, bài viết, tài khoản kẻ bắt nạt kèm mốc thời gian cụ thể trước khi bài viết bị xóa hoặc ẩn đi.\n- Bước 3: Chặn tương tác và báo cáo vi phạm: Sử dụng tính năng Chặn (Block) tài khoản quấy rối để cắt đứt liên lạc, đồng thời sử dụng tính năng Báo cáo (Report) bài viết vi phạm lên quản trị viên nền tảng mạng xã hội.\n- Bước 4: Tìm kiếm sự giúp đỡ từ người tin cậy: Lập tức chia sẻ sự việc với cha mẹ, thầy cô giáo chủ nhiệm hoặc chuyên viên tâm lý học đường; nếu có dấu hiệu đe dọa bạo lực hoặc tống tiền, cần báo ngay cho cơ quan công an để can thiệp kịp thời."
    }
  ]
};
