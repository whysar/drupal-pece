<?php
/**
 * @file
 * pece_artifacts_future_anterior.features.field_base.inc
 */

/**
 * Implements hook_field_default_field_bases().
 */
function pece_artifacts_future_anterior_field_default_field_bases() {
  $field_bases = array();

  // Exported field_base: 'field_pece_iframe'.
  $field_bases['field_pece_iframe'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_pece_iframe',
    'indexes' => array(),
    'locked' => 0,
    'module' => 'iframe',
    'settings' => array(
      'class' => 'field-iframe',
      'frameborder' => 0,
      'profile2_private' => FALSE,
      'scrolling' => 'auto',
      'tokensupport' => 0,
      'transparency' => 0,
    ),
    'translatable' => 0,
    'type' => 'iframe',
  );

  return $field_bases;
}
