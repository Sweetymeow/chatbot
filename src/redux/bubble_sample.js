const imgBub = {
  step_id: 0,
  type: "img_bub",
  next_step_type: "go",
  request: null,
  opionts: [],
  bub_props: {
    img_src: "../res/Gopher.png",
    max_width: "6rem"
  }
};

const textBub = {
  step_id: 1,
  type: "text_bub",
  next_step_type: "go",
  request: null,
  opionts: [],
  bub_props: {
    text: "My name is Juan. I am a UX/UI designer currently working at SAP.",
    html: "My name is <s>Juan</s>. I am a <s>UX / UI designer</s> currently working at <s className='underline'>SAP</s>.",
    max_width: "10rem"
  }
};

const btnBub = {
  step_id: 2,
  type: "btn_bub",
  next_step_type: "choose",
  request: "123qwe",
  opionts: [{
    op_id: 0,
    op_text: "Recruiting Designer",
    op_val: "RECRUITER"
  }, {
    op_id: 1,
    op_text: "Just Wander Around",
    op_val: "VIEWER"
  }]
};

export { imgBub, textBub, btnBub };
