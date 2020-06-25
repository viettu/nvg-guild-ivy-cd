export function getSteps() {
  return [
    'None,None',
    ...getComponentSteps('Parent'),
    ...getComponentSteps('Child'),
    ...getComponentSteps('NgFor_222222222'),
    ...getComponentSteps('SubChild_222222222'),
    ...getComponentSteps('NgFor_333333333'),
    ...getComponentSteps('SubChild_333333333'),
    ...getComponentSteps('SubChild_999999999')
    // 'Parent,AssignOrUpdateViewChildren',
    // 'Parent,ExecuteViewLifecycleHooks',
    // 'Parent,ResetDirtyFlag'
  ];

  function getComponentSteps(component: string) {
    return [
      `${component},None`,
      `${component},SyncDOM`,
      `${component},AssignOrUpdateInputs`,
      `${component},ExecuteInitLifecycleHooks`,
      `${component},SyncDynamicContents`,
      `${component},AssignOrUpdateContentChildren`,
      `${component},ExecuteContentLifecycleHooks`,
      `${component},SyncHostBindings`,
      `${component},CallCDProcessOnChildren`,
      // `${component},AssignOrUpdateViewChildren`,
      // `${component},ExecuteViewLifecycleHooks`,
      // `${component},ResetDirtyFlag`
    ];
  }
}

export const ROOT_TEMPLATE = ` <app-parent _ngcontent-bku-c21="">
    <h2>Parent</h2>
    <app-child>
      <h2>Child<span></span></h2>
      <app-sub-child>
        <h2>Sub-Child<span></span></h2>
      </app-sub-child>
      <!--container-->
    </app-child>
  </app-parent>
`;

export const PARENT_TEMPLATE = ` <app-parent _ngcontent-bku-c21="">
    <h2>Parent</h2>
    <app-child ng-reflect-prop1="111111111">
      <h2>Child<span></span></h2>
      <app-sub-child>
        <h2>Sub-Child<span></span></h2>
      </app-sub-child>
      <!--container-->
    </app-child>
  </app-parent>
`;

export const CHILD_TEMPLATE = ` <app-parent _ngcontent-bku-c21="">
    <h2>Parent</h2>
    <app-child ng-reflect-prop1="111111111">
      <h2>Child<span>111111111</span></h2>
      <app-sub-child ng-reflect-item="999999999">
        <h2>Sub-Child<span></span></h2>
      </app-sub-child>
      <app-sub-child>
        <h2>Sub-Child<span></span></h2>
      </app-sub-child>
      <app-sub-child>
        <h2>Sub-Child<span></span></h2>
      </app-sub-child>
      <!--bindings={ "ng-reflect-ng-for-of": "222222222,333333333" }-->
    </app-child>
  </app-parent>
`;

export const NGFOR_222222222_TEMPLATE = ` <app-parent _ngcontent-bku-c21="">
    <h2>Parent</h2>
    <app-child ng-reflect-prop1="111111111">
      <h2>Child<span>111111111</span></h2>
      <app-sub-child ng-reflect-item="999999999">
        <h2>Sub-Child<span></span></h2>
      </app-sub-child>
      <app-sub-child ng-reflect-item="222222222">
        <h2>Sub-Child<span></span></h2>
      </app-sub-child>
      <app-sub-child>
        <h2>Sub-Child<span></span></h2>
      </app-sub-child>
      <!--bindings={ "ng-reflect-ng-for-of": "222222222,333333333" }-->
    </app-child>
  </app-parent>
`;

export const SUBCHILD_222222222_TEMPLATE = ` <app-parent _ngcontent-bku-c21="">
    <h2>Parent</h2>
    <app-child ng-reflect-prop1="111111111">
      <h2>Child<span>111111111</span></h2>
      <app-sub-child ng-reflect-item="999999999">
        <h2>Sub-Child<span></span></h2>
      </app-sub-child>
      <app-sub-child ng-reflect-item="222222222">
        <h2>Sub-Child<span>222222222</span></h2>
      </app-sub-child>
      <app-sub-child>
        <h2>Sub-Child<span></span></h2>
      </app-sub-child>
      <!--bindings={ "ng-reflect-ng-for-of": "222222222,333333333" }-->
    </app-child>
  </app-parent>
`;

export const NGFOR_333333333_TEMPLATE = ` <app-parent _ngcontent-bku-c21="">
    <h2>Parent</h2>
    <app-child ng-reflect-prop1="111111111">
      <h2>Child<span>111111111</span></h2>
      <app-sub-child ng-reflect-item="999999999">
        <h2>Sub-Child<span></span></h2>
      </app-sub-child>
      <app-sub-child ng-reflect-item="222222222">
        <h2>Sub-Child<span>222222222</span></h2>
      </app-sub-child>
      <app-sub-child ng-reflect-item="333333333">
        <h2>Sub-Child<span></span></h2>
      </app-sub-child>
      <!--bindings={ "ng-reflect-ng-for-of": "222222222,333333333" }-->
    </app-child>
  </app-parent>
`;

export const SUBCHILD_333333333_TEMPLATE = ` <app-parent _ngcontent-bku-c21="">
    <h2>Parent</h2>
    <app-child ng-reflect-prop1="111111111">
      <h2>Child<span>111111111</span></h2>
      <app-sub-child ng-reflect-item="999999999">
        <h2>Sub-Child<span></span></h2>
      </app-sub-child>
      <app-sub-child ng-reflect-item="222222222">
        <h2>Sub-Child<span>222222222</span></h2>
      </app-sub-child>
      <app-sub-child ng-reflect-item="333333333">
        <h2>Sub-Child<span>333333333</span></h2>
      </app-sub-child>
      <!--bindings={ "ng-reflect-ng-for-of": "222222222,333333333" }-->
    </app-child>
  </app-parent>
`;

export const SUBCHILD_999999999_TEMPLATE = ` <app-parent _ngcontent-bku-c21="">
    <h2>Parent</h2>
    <app-child ng-reflect-prop1="111111111">
      <h2>Child<span>111111111</span></h2>
      <app-sub-child ng-reflect-item="999999999">
        <h2>Sub-Child<span>999999999</span></h2>
      </app-sub-child>
      <app-sub-child ng-reflect-item="222222222">
        <h2>Sub-Child<span>222222222</span></h2>
      </app-sub-child>
      <app-sub-child ng-reflect-item="333333333">
        <h2>Sub-Child<span>333333333</span></h2>
      </app-sub-child>
      <!--bindings={ "ng-reflect-ng-for-of": "222222222,333333333" }-->
    </app-child>
  </app-parent>
`;
